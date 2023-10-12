import { UseIs, defaultWindow } from "@/utils";
import { useState } from "react"

type Position = {
    x: number
    y: number
}

type PointerType = 'mouse' | 'touch' | 'pen';

type UseDraggableOptions = {
    /**
     * only start the dragging when click on the target element
     */
    exact?: boolean
    /**
     * prevent the default event
     */
    preventDefault?: boolean
    /**
     * prevent the event propagation
     */
    stopPropagation?: boolean
    /**
     * dispatch events in capturing phase
     */
    capture?: boolean
    /**
     * element to attach events
     */
    draggingElement?: HTMLElement | SVGElement | Window | Document | null | undefined
    /**
     * element for calculating bounds
     */    
    containerElement?: HTMLElement | SVGElement | null | undefined
    /**
     * 
     */
    handle?: HTMLElement | SVGElement | null | undefined
    /**
     * pointer types that listen to
     */
    pointerTypes?: PointerType[]
    /**
     * init position of the element
     */
    initPosition?: Position


    onStart?: (position: Position, event: PointerEvent) => void | false

    onMove?: (position: Position, event: PointerEvent) => void
    
    onEnd?: (position: Position, event: PointerEvent) => void

    axis?: 'x' | 'y' | 'both'

}


export const useDraggable = (
    target: HTMLElement | SVGElement | null | undefined,
    options: UseDraggableOptions = {}
) => {
    const {
        exact = false,
        initPosition = {x: 0, y: 0},
        pointerTypes,
        preventDefault = false,
        stopPropagation = false,
        containerElement = target,
        capture = true,
        axis = 'both',
        onStart,
        onMove,
        onEnd,
        draggingElement = defaultWindow,
        handle: draggingHandle = target
    } = options;
    const [position, setPosition] = useState<Position>(initPosition);
    const [pressedDelta, setPressedDelta] = useState<Position>();

    const filterEvent = (e: PointerEvent) => {
        if(pointerTypes) return pointerTypes.includes(e.pointerType as PointerType);
        return true;
    }

    const handleEvent = (e: PointerEvent) => {
        if(preventDefault) e.preventDefault();
        if(stopPropagation) e.stopPropagation();
    }

    const start = (e: PointerEvent) => {
        if(!filterEvent(e)) return;

        if(exact && e.target !== target) return;

        const rect = containerElement!.getBoundingClientRect();

        const pos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }

        if(onStart?.(pos, e) === false) return;
        setPressedDelta(pos);
        handleEvent(e);
    }

    const move = (e: PointerEvent) => {
        if(!filterEvent(e)) return;
        if(!pressedDelta) return;

        let {x, y} = position;

        if(axis === 'x' || axis === 'both') 
            x = e.clientX - pressedDelta.x;
        if(axis === 'y' || axis === 'both')
            y = e.clientY - pressedDelta.y;
        setPosition({
            x,
            y
        });
        onMove?.({x, y}, e);
        handleEvent(e);
    }

    const end = (e: PointerEvent) => {
        if(!filterEvent(e)) return;
        if(!pressedDelta) return;
        setPressedDelta(undefined);
        onEnd?.(position, e);
        handleEvent(e);
    }

    if(UseIs.isClient()) {
        

    }

}