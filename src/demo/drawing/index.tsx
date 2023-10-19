import { DrawingMode, createDrauu } from "drauu";
import { useCallback, useEffect, useRef, useState } from "react";
import './index.less';
import type { Drauu } from "@drauu/core";
import ToolBar from "./toolbar";


const Drawing = () => {
    const drauu = useRef<Drauu | null>(null);

    const [mode, setMode] = useState<DrawingMode>('stylus');

    useEffect(() => {
        drauu.current = createDrauu({
            el: '.drawing-wrapper #drawing-area',
            brush: {
                color: 'skyblue',
                size: 5,
                mode,
                // dash line
                // dasharray: '10 10',
                // dash-dotted line
                // dasharray: '1 10'
            },
        });
        // console.log(drauu);
        return () => {
            console.log('clear drauu');
            drauu.current = null;
        }
    }, []);

    const setBrushMode = useCallback(
        () => {
            drauu.current!.brush.mode = mode;
        }, [mode]
    );

    useEffect(() => {
        if (!drauu.current) return;
        setBrushMode();
    }, [mode, setBrushMode]);

    return (
        <div className="drawing-wrapper">
            <div className="toolbar">
                <ToolBar
                    initMode={mode}
                    returnActiveKey={(activeKey) => {
                        console.log('activeKey =>', activeKey);

                        setMode(activeKey);
                    }}
                />
            </div>


            <svg id="drawing-area"></svg>


        </div>
    );
}

export default Drawing;