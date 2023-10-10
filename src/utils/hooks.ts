import { useCallback, useEffect, useRef, useState } from "react"
import { UseDate, defaultWindow } from "./index";
import type { DocumentEventName, Fn, WindowEventName } from "./types";

type UseIdleOptions = {
    /**
     * idle timeout
     */
    timeout?: number
    /**
     * events that need to listen
     */
    events?: WindowEventName[]
    listenForVisibilityChange?: boolean
    window?: Window
}

/**
 * tracks whether the user is being inactive
 * @param options UseIdleOptions
 * @returns 
 */
export const useIdle = (options: UseIdleOptions = {}) => {
    const oneMinute = 60_000;
    const defaultEvents: WindowEventName[] = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
    const {
        timeout = oneMinute,
        events = defaultEvents,
        listenForVisibilityChange = true,
        window = defaultWindow
    } = options;
    const [isIdle, setIsIdle] = useState<boolean>(false);
    const [lastActive, setLastActive] = useState<number>(UseDate.timestamp());
    const timeoutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const intervalTimer = useRef<ReturnType<typeof setInterval> | null>(null);
    const cleanups = useRef<Fn[]>([]);

    const [idleTime, setIdleTime] = useState<number>(0);

    const [isListening, setIsListening] = useState<boolean>(false);

    const cleanTimer = () => {
        if(timeoutTimer.current) {
            clearTimeout(timeoutTimer.current);
        }
    }

    const reset = () => {
        setIsIdle(false)
        cleanTimer();
        timeoutTimer.current = setTimeout(() => {
            setIsIdle(true);
        }, timeout);
    };

    const onEvent = () => {
        setLastActive(UseDate.timestamp());
        reset();
    }

    /**
     * clean all event listeners
     */
    const cleanup = () => {
        cleanups.current.forEach(fn => fn());
        cleanups.current.length = 0;
        // 点击按钮清除监听也是一个操作事件,先执行了mousedown,才清除了监听,所以最后多了一次setTimeout
        cleanTimer();
        setIsListening(false);
        setIdleTime(0);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addEventListener = (el: any, events: WindowEventName[] | DocumentEventName[], fn: () => void) => {
        for(const event of events) {
            // el.addEventListener(event, fn);
            const wrapEvent = () => {
                fn();
                // console.log(`${event}触发了`);
            }
            el.addEventListener(event, wrapEvent);
            cleanups.current.push(() => {
                // console.log('clean event =>', event);
                el.removeEventListener(event, wrapEvent);
            });
        }
    }

    const convertTime = useCallback(
        () => {
            setIdleTime(Math.floor((UseDate.timestamp() - lastActive) / 1000));
        },
        [lastActive]
    );

    const startInterval = useCallback(
        () => {
            intervalTimer.current = setInterval(() => {
                convertTime();
            }, 1000);
        },
        [convertTime]
    );

    const stopInterval = () => {
        if(intervalTimer.current) clearInterval(intervalTimer.current);
    }

    useEffect(() => {
        if(isListening) {
            stopInterval();
            startInterval();
        } else {
            stopInterval();
        }
    }, [isListening, startInterval]);


    const listen = () => {
        if(window) {
            const document = window.document;
            addEventListener(window, events, onEvent);
            if(listenForVisibilityChange) {
                addEventListener(document, ['visibilitychange'], () => {
                    console.log('document hiding status: ', document.hidden);
                    //done when the document changes from invisible to visible
                    if(!document.hidden) onEvent(); 
                });
            }
            reset();
            setIsListening(true);
        }
    }

    return {
        isIdle,
        lastActive,
        idleTime,
        listen,
        cleanup
    };
}

