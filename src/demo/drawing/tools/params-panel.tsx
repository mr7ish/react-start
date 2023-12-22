import { Shrink } from "@/demo/svg";
import { useCallback, useMemo, useState } from "react";
import RangeSlider from "./range-slider";
import ColorPicker from "./color-picker";
import FilledPicker from "./filled-picker";
import StrokePicker, { StrokePattern } from "./stroke-picker";

export type DisplayingFieldSets = 'brushSize' | 'brushColorPicker' | 'filledPicker' | 'shapeFilledPicker' | 'strokePicker'

type ParamsPanelProps = {
    isLight?: boolean
    initStatus?: boolean
    brushSizeRangeSlider: {
        initValue?: number
        returnRangeValue?: (rangeValue: number) => void
    }
    brushColorColorPicker: {
        initColor?: string
        returnColor?: (color: string) => void
    }
    shapeFilledPicker: {
        initColor?: string
        initShapeFilled?: boolean
        returnColor?: (color: string) => void
        returnIsFilled?: (filled: boolean) => void
    },
    strokePicker: {
        initPattern?: StrokePattern
        returnStrokePattern?: (pattern: StrokePattern) => void
    }
    displayingFieldSets: DisplayingFieldSets[]
}

const ParamsPanel = ({
    initStatus = true,
    brushSizeRangeSlider,
    brushColorColorPicker,
    shapeFilledPicker,
    strokePicker,
    displayingFieldSets,
    isLight = true
}: ParamsPanelProps) => {


    const [open, setOpen] = useState<boolean>(initStatus);

    const fieldsetList = useMemo(() => {
        return [
            {
                key: 'brushSize',
                label: '笔刷粗细',
                el: () => <RangeSlider label='' min={1} max={50} step={1} width={'100%'} initValue={brushSizeRangeSlider.initValue} returnRangeValue={brushSizeRangeSlider.returnRangeValue} />
            },
            {
                key: 'brushColorPicker',
                label: '笔刷颜色',
                el: () => <ColorPicker isLight={isLight} initColor={brushColorColorPicker.initColor} returnColor={brushColorColorPicker.returnColor} />
            },
            {
                key: 'filledPicker',
                label: '填充',
                el: () => <FilledPicker initFilled={shapeFilledPicker.initShapeFilled} returnIsFilled={shapeFilledPicker.returnIsFilled} />
            },
            {
                key: 'shapeFilledPicker',
                label: '填充颜色',
                el: () => <ColorPicker isLight={isLight} initColor={shapeFilledPicker.initColor} returnColor={shapeFilledPicker.returnColor} />
            },
            {
                key: 'strokePicker',
                label: '线条样式',
                el: () => <StrokePicker initPattern={strokePicker.initPattern} returnStrokePattern={strokePicker.returnStrokePattern}></StrokePicker>
            }
        ]
    }, [brushColorColorPicker, brushSizeRangeSlider, shapeFilledPicker, strokePicker, isLight])

    const renderFieldsets = useCallback(() => {
        return fieldsetList.filter(fieldset => displayingFieldSets.includes(fieldset.key as DisplayingFieldSets))
            .map(fieldset => (
                <div
                    key={fieldset.key}
                    className="params-panel-fieldset"
                >
                    <div className="fieldset-label">{fieldset.label}</div>
                    <div className="fieldset-wrapper">{fieldset.el()}</div>
                </div>
            ))
    }, [displayingFieldSets, fieldsetList]);

    return (
        <div
            className="params-panel-wrapper"
            style={{
                left: open ? '16px' : '-200px',
                backgroundColor: isLight ? '#ffffff' : '#232329'
            }}
        >
            <div
                className="toggle-btn"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <Shrink filledColor="#b8b8b8" />
            </div>

            {renderFieldsets()}

        </div>
    );
}

export default ParamsPanel;