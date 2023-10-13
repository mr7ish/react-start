/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultWindow } from "@/utils";
import { AnyFn, Fn } from "@/utils/types";
import { useCallback, useRef } from "react";

export type Listener<T, E> = (this: T, event: E) => any;

export type Arrayable<T> = T[] | T;

type UseEventListenerReturn = {
    listen: Fn
    stop: Fn
}

/**
 * overload_1: no target, default window
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof WindowEventMap>(
    event: Arrayable<Event>,
    listener: Arrayable<Listener<Window, WindowEventMap[Event]>>,
    options?: boolean | AddEventListenerOptions
) : UseEventListenerReturn

/**
 * overload_2: specify Window target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof WindowEventMap>(
    target: Window,
    event: Arrayable<Event>,
    listener: Arrayable<Listener<Window, WindowEventMap[Event]>>,
    options?: boolean | AddEventListenerOptions
) : UseEventListenerReturn

/**
 * overload_3: specify Document target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof DocumentEventMap>(
    target: DocumentOrShadowRoot,
    event: Arrayable<Event>,
    listener: Arrayable<Listener<Document, DocumentEventMap[Event]>>,
    options?: boolean | AddEventListenerOptions
) : UseEventListenerReturn

/**
 * overload_4: specify HTMLElement target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof HTMLElementEventMap>(
    target: HTMLElement,
    event: Arrayable<Event>,
    listener: Arrayable<Listener<HTMLElement, HTMLElementEventMap[Event]>>,
    options?: boolean | AddEventListenerOptions
) : UseEventListenerReturn


export function useEventListener(...args: any[]) {
    let target: Window | DocumentOrShadowRoot | HTMLElement | undefined;
    let events: Arrayable<string>;
    let listeners: Arrayable<AnyFn>;
    let options: boolean | AddEventListenerOptions | undefined;

    if(Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
    } else {
        [target, events, listeners, options] = args;
    }

    if(!Array.isArray(events))
        events = [events];
    
    if(!Array.isArray(listeners))
        listeners = [listeners];

    const cleanups = useRef<Fn[]>([]);

    const cleanup = useCallback(
        () => {
            cleanups.current.forEach(fn => fn());
            cleanups.current.length = 0;
        }, [cleanups]
    );
    
    const listen = useCallback(
        () => {
            cleanup();
            cleanups.current.push(
                ...(events as string[]).flatMap(event => {
                    return (listeners as AnyFn[]).map(listener => register(target, event, listener, options));
                })
            );
        }, [cleanup, events, listeners, options, target]
    );

    const register = (el: any, event: string, listener: Listener<any, any>, option: AddEventListenerOptions | boolean | undefined) => {
        el.addEventListener(event, listener, option);
        return () => el.removeEventListener(event, listener, option);
    }

    const stop = () => {
        cleanup();
    }

    console.log('remount');
    
    if(!target) return {
        listen: () => {},
        stop: () => {}
    };

    return {
        listen,
        stop
    };
}