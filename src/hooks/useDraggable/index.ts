import { UseIs, defaultWindow } from "@/utils";
import { useCallback, useState } from "react"
import { useEventListener } from "../useEventListener";

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
     * element to attach pointer move and up events during dragging)
     */
    draggingElement?: HTMLElement | SVGElement | Window | Document | null | undefined
    /**
     * element for calculating bounds
     */    
    containerElement?: HTMLElement | SVGElement | null | undefined
    /**
     * element to trigger the drag event
     * @default target
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
    /**
     * the direction that you can move
     */
    axis?: 'x' | 'y' | 'both'
    /**
     * callback when the dragging start and return false to prevent dragging
     */
    onStart?: (position: Position, event: PointerEvent) => void | false
    /**
     * callback during dragging
     */
    onMove?: (position: Position, event: PointerEvent) => void
    /**
     * callback when the dragging end
     */
    onEnd?: (position: Position, event: PointerEvent) => void
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
    const config = { capture };

    const { listen: pointerdownListen, stop: pointerdownStop } = useEventListener(draggingHandle as HTMLElement, 'pointerdown', start, config);
    const { listen: pointermoveListen, stop: pointermoveStop } = useEventListener(draggingElement as HTMLElement, 'pointermove', move, config);
    const { listen: pointerupListen, stop: pointerupStop } = useEventListener(draggingElement as HTMLElement, 'pointerup', end, config);

    const unmount = useCallback(
        () => {
            // console.log('unmount');
            pointerdownStop();
            pointermoveStop();
            pointerupStop();
        }, 
        [pointerdownStop, pointermoveStop, pointerupStop]
    );

    const mount = useCallback(
        () => {
            unmount();
            if(UseIs.isClient()) {
                // console.log('mount');
                pointerdownListen();
                pointermoveListen();
                pointerupListen();
            }
        },
        [pointerdownListen, pointermoveListen, pointerupListen, unmount]
    );

    // const unmount = () => {
    //     pointerdownStop();
    //     pointermoveStop();
    //     pointerupStop();
    // }

    // const mount = () => {
    //     unmount();
    //     pointerdownListen();
    //     pointermoveListen();
    //     pointerupListen();
    // }

    // useEffect(() => {
    //     if(UseIs.isClient()) {
    //         mount();
    //         console.log(target);
    //     }
    // },[target]);

    return {
        ...position,
        position,
        isDragging: !!pressedDelta,
        mount,
        unmount
    }
}