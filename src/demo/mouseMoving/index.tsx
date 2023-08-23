import { useState } from 'react'
import Mouse from './mouseMoving'
import './index.less'

type Position = {
    x: number
    y: number
}

const MouseMovingWrapper = () => {
    const [position, setPosition] = useState<Position>({
        x: 0,
        y: 0
    });

    const mouseMoving = (e: React.MouseEvent) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
        // console.log(position);
    }

    return (
        <div
            className="mouse-moving-wrapper"
            onPointerMove={mouseMoving}
        >
            <Mouse
                position={position}
            />
        </div>
    )
}

export default MouseMovingWrapper;