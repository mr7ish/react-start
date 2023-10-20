import { DrawingMode, createDrauu } from "drauu";
import { useCallback, useEffect, useRef, useState } from "react";
import './index.less';
import type { Drauu } from "@drauu/core";
import ToolBar, { Mode } from "./tools/toolbar";
import RangeSlider from "./tools/range-slider";

// TODO color
// TODO size
// TODO fill
// TODO dasharray
// TODO cornerRadius
// TODO stylusOptions

const Drawing = () => {
    const drauu = useRef<Drauu | null>(null);

    const [mode, setMode] = useState<Mode>('stylus');

    useEffect(() => {
        // init drauu when component mount 
        drauu.current = createDrauu({
            el: '.drawing-wrapper #drawing-area',
            brush: {
                color: 'skyblue',
                size: 5,
                mode: mode as DrawingMode,
                arrowEnd: false
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
            if (mode === 'arrow') {
                drauu.current!.brush.mode = 'line';
                drauu.current!.brush.arrowEnd = true;
                return;
            }
            if (drauu.current!.brush.arrowEnd) {
                drauu.current!.brush.arrowEnd = false;
            }
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

            <RangeSlider />

            <svg id="drawing-area"></svg>


        </div>
    );
}

export default Drawing;