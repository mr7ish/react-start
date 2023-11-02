import { Shrink } from "@/demo/svg";
import { useState } from "react";
import RangeSlider from "./range-slider";
import ColorPicker from "./color-picker";

type ParamsPanelProps = {
    isLight?: boolean
    initStatus?: boolean
    brushSizeRangeSlider: {
        initValue: number
        returnRangeValue: (rangeValue: number) => void
    }
    brushColorColorPicker: {
        initColor: string
        returnColor: (color: string) => void
    }
}

const ParamsPanel = ({
    initStatus = true,
    brushSizeRangeSlider,
    brushColorColorPicker,
    isLight = true
}: ParamsPanelProps) => {

    const [open, setOpen] = useState<boolean>(initStatus);

    const fieldsetList = [
        {
            key: 'brushSize',
            label: '笔刷粗细',
            el: () => <RangeSlider label='' min={1} max={50} step={1} width={'100%'} initValue={brushSizeRangeSlider.initValue} returnRangeValue={brushSizeRangeSlider.returnRangeValue} />
        },
        {
            key: 'colorPicker',
            label: '颜色选择',
            el: () => <ColorPicker isLight={isLight} initColor={brushColorColorPicker.initColor} returnColor={brushColorColorPicker.returnColor} />
        }
    ];

    const renderFieldsets = () => {
        return fieldsetList.map(fieldset => (
            <div
                key={fieldset.key}
                className="params-panel-fieldset"
            >
                <div className="fieldset-label">{fieldset.label}</div>
                <div className="fieldset-wrapper">{fieldset.el()}</div>
            </div>
        ))
    }

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