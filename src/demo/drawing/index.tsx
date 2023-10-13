import { createDrauu } from "drauu";
import { useEffect, useRef } from "react";
import './index.less';
import type { Drauu } from "@drauu/core";
import ToolBar from "./toolbar";

const Drawing = () => {
    const drauu = useRef<Drauu | null>(null);

    useEffect(() => {
        drauu.current = createDrauu({
            el: '.drawing-wrapper #drawing-area',
            brush: {
                color: 'skyblue',
                size: 5,
                mode: 'stylus',
                dasharray: '10 10'
            },
        });
        // console.log(drauu);
        return () => {
            drauu.current = null;
        }
    }, []);




    return (
        <div className="drawing-wrapper">
            <div className="toolbar">
                <ToolBar />
            </div>


            <svg id="drawing-area"></svg>


        </div>
    );
}

export default Drawing;