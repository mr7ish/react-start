/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultWindow } from "@/utils";
import { AnyFn, Fn } from "@/utils/types";

export type Listener<T, E> = (this: T, event: E) => any;


// define

/**
 * overload1: no target, default window
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof WindowEventMap>(
    event: Event[],
    listener: Listener<Window, WindowEventMap[Event]>[],
    options?: boolean | AddEventListenerOptions
) : Fn

/**
 * overload2: specify Window target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof WindowEventMap>(
    target: Window,
    event: Event[],
    listener: Listener<Window, WindowEventMap[Event]>[],
    options?: boolean | AddEventListenerOptions
) : Fn

/**
 * overload3: specify Document target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof DocumentEventMap>(
    target: DocumentOrShadowRoot,
    event: Event[],
    listener: Listener<Document, DocumentEventMap[Event]>[],
    options?: boolean | AddEventListenerOptions
) : Fn

/**
 * overload4: specify HTMLElement target
 * @param target 
 * @param event 
 * @param listener 
 * @param options 
 */
export function useEventListener<Event extends keyof HTMLElementEventMap>(
    target: HTMLElement,
    event: Event[],
    listener: Listener<HTMLElement, HTMLElementEventMap[Event]>[],
    options?: boolean | AddEventListenerOptions
) : Fn



// implement
export function useEventListener(...args: any[]) {

    let target: (Window & typeof globalThis) | undefined;
    let events: string[];
    let listeners: AnyFn[];
    let options: boolean | AddEventListenerOptions | undefined;

    if(Array.isArray(args[0])) {
        [events, listeners, options] = args;
        target = defaultWindow;
    } else {
        [target, events, listeners, options] = args;
    }

    if(!target) return () => {};

    const cleanups: Fn[] = [];

    const cleanup = () => {
        cleanups.forEach(fn => fn());
        cleanups.length = 0;
    }

    const register = (el: any, event: string, listener: Listener<any, any>, option: AddEventListenerOptions | boolean | undefined) => {
        el.addEventListener(event, listener, option);
        return () => el.removeEventListener(event, listener, option);
    }

    const listen = () => {
        cleanups.push(
            ...events.flatMap(event => {
                return listeners.map(listener => register(target, event, listener, options));
            })
        );
    }

    const stop = () => {
        cleanup();
    }

    listen();

    return stop;
}