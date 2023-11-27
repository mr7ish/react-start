import { DrawingMode, createDrauu } from "drauu";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import './index.less';
import type { Drauu } from "@drauu/core";
import ToolBar, { Mode } from "./tools/toolbar";
import { callFnSecurely } from "@/utils";
import ParamsPanel, { DisplayingFieldSets } from "./tools/params-panel";
import Toggle from "../toggle";

// TODO size ✔
// TODO color ✔
// TODO fill ✔
// TODO dasharray
// TODO cornerRadius
// TODO stylusOptions
// TODO ctrl z/y



const Drawing = () => {
    const [isLight, setIsLight] = useState(true);

    const drauu = useRef<Drauu | null>(null);

    const [mode, setMode] = useState<Mode>('stylus');
    const initBrushSize = useMemo(() => 5, []);
    const initColor = useMemo(() => '#87CEEB', []);
    const initShapeFilled = useMemo(() => false, []);
    const [brushSize, setBrushSize] = useState<number>(initBrushSize);
    const [brushColor, setBrushColor] = useState<string>(initColor);
    const [isShapeFilled, setIsShapeFilled] = useState<boolean>(initShapeFilled);
    const [shapeFilledColor, setShapeFilledColor] = useState<string>(initColor);
    const commonFieldSets = useMemo<DisplayingFieldSets[]>(() => ['brushSize', 'brushColorPicker'], []);
    const [displayingFieldSets, setDisplayingFieldSets] = useState<DisplayingFieldSets[]>(commonFieldSets);

    useEffect(() => {
        // init drauu when component mount 
        drauu.current = createDrauu({
            el: '.drawing-wrapper #drawing-area',
            brush: {
                color: brushColor,
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

    const setBrushColorTheme = useCallback(
        () => {
            drauu.current!.brush.color = brushColor;
        }, [brushColor]
    );

    const setShapeFilled = useCallback(
        () => {
            drauu.current!.brush.fill = !isShapeFilled ? 'transparent' : shapeFilledColor
        }, [isShapeFilled, shapeFilledColor]
    );

    useEffect(() => {
        if (['rectangle', 'ellipse'].includes(mode)) {
            const handle: DisplayingFieldSets[] = isShapeFilled ? ['filledPicker', 'shapeFilledPicker'] : ['filledPicker'];
            setDisplayingFieldSets([
                ...commonFieldSets,
                ...handle
            ]);
        } else {
            setDisplayingFieldSets([
                ...commonFieldSets,
            ]);
            setIsShapeFilled(initShapeFilled);
            setShapeFilledColor(initColor);
        }
    }, [commonFieldSets, initColor, initShapeFilled, isShapeFilled, mode]);

    useEffect(() => {
        callFnSecurely(!!drauu.current, setBrushMode);
    }, [setBrushMode]);

    useEffect(() => {
        callFnSecurely(!!drauu.current, setBrushThickness);
    }, [setBrushThickness]);

    useEffect(() => {
        callFnSecurely(!!drauu.current, setBrushColorTheme);
    }, [setBrushColorTheme]);

    useEffect(() => {
        callFnSecurely(!!drauu.current, setShapeFilled);
    }, [setShapeFilled]);

    return (
        <div className="drawing-wrapper">
            <Toggle backMode={(_isLight) => { setIsLight(_isLight) }} />
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
                    initValue: initBrushSize,
                    returnRangeValue(rangeValue) {
                        setBrushSize(rangeValue);
                    }
                }}
                brushColorColorPicker={{
                    initColor,
                    returnColor(color) {
                        setBrushColor(color);
                    }
                }}
                shapeFilledPicker={{
                    initColor,
                    initShapeFilled,
                    returnColor(color) {
                        setShapeFilledColor(color);
                    },
                    returnIsFilled(filled) {
                        setIsShapeFilled(filled);
                        if (filled) {
                            setDisplayingFieldSets([
                                ...displayingFieldSets,
                                'shapeFilledPicker'
                            ]);
                        } else {
                            setDisplayingFieldSets(displayingFieldSets.filter(field => field !== 'shapeFilledPicker'));
                        }
                    }
                }}
                isLight={isLight}
                displayingFieldSets={displayingFieldSets}
            />

            <svg id="drawing-area"></svg>


        </div>
    );
}

export default Drawing;