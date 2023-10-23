import { DrawingMode, createDrauu } from "drauu";
import { useCallback, useEffect, useRef, useState } from "react";
import './index.less';
import type { Drauu } from "@drauu/core";
import ToolBar, { Mode } from "./tools/toolbar";
import { callFnSecurely } from "@/utils";
import ParamsPanel from "./tools/params-panel";

// TODO color
// TODO size
// TODO fill
// TODO dasharray
// TODO cornerRadius
// TODO stylusOptions
// TODO ctrl z/y



const Drawing = () => {
    const drauu = useRef<Drauu | null>(null);

    const [mode, setMode] = useState<Mode>('stylus');
    const [brushSize, setBrushSize] = useState<number>(5);

    useEffect(() => {
        // init drauu when component mount 
        drauu.current = createDrauu({
            el: '.drawing-wrapper #drawing-area',
            brush: {
                color: 'skyblue',
                size: brushSize,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const setBrushThickness = useCallback(
        () => {
            drauu.current!.brush.size = brushSize;
        }, [brushSize]
    );

    useEffect(() => {
        callFnSecurely(!!drauu.current, setBrushMode);
    }, [setBrushMode]);

    useEffect(() => {
        callFnSecurely(!!drauu.current, setBrushThickness);
    }, [setBrushThickness]);

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

            <ParamsPanel
                brushSizeRangeSlider={{
                    initValue: brushSize,
                    returnRangeValue(rangeValue) {
                        setBrushSize(rangeValue);
                    }
                }}
            />

            <svg id="drawing-area"></svg>


        </div>
    );
}

export default Drawing;