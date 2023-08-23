import { useEffect, useRef, useState } from "react";
import './mouse.less';

type Position = {
    x: number
    y: number
}

type OffsetWH = {
    offsetWidth: number
    offsetHeight: number
}

const Mouse = (props: { position: Position }) => {
    const { position } = props;
    const mouseRef = useRef<HTMLDivElement | null>(null);

    const [offsetWH, setOffsetWH] = useState<OffsetWH>({
        offsetWidth: 0,
        offsetHeight: 0
    })

    useEffect(() => {
        // console.log(mouseRef.current?.offsetWidth);
        // console.log(mouseRef.current?.offsetHeight);
        setOffsetWH({
            offsetWidth: (mouseRef.current as HTMLDivElement).offsetWidth as number,
            offsetHeight: (mouseRef.current as HTMLDivElement).offsetHeight as number
        })
    }, [])

    // console.log('pos =>', position);
    return (
        <div
            className='mouse'
            ref={mouseRef}
            style={{
                // transform: `translate(${position.x - offsetWH.offsetWidth * 1.5}px, ${position.y - offsetWH.offsetHeight}px)`
                transform: `translate(${position.x - offsetWH.offsetWidth / 2}px, ${position.y - offsetWH.offsetHeight / 2}px)`
                // transform: `translate(${position.x}px, ${position.y}px)`
            }}
        >
        </div>
    )
}

export default Mouse;