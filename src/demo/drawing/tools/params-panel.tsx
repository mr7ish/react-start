import { Shrink } from "@/demo/svg";
import { useState } from "react";
import RangeSlider from "./range-slider";

type ParamsPanelProps = {
    initStatus?: boolean
    brushSizeRangeSlider: {
        initValue: number
        returnRangeValue: (rangeValue: number) => void
    }
}

const ParamsPanel = ({
    initStatus = true,
    brushSizeRangeSlider
}: ParamsPanelProps) => {

    const [open, setOpen] = useState<boolean>(initStatus);

    const fieldsetList = [
        {
            key: 'brushSize',
            label: '笔刷粗细',
            el: () => <RangeSlider label='' min={1} max={50} step={1} width={'100%'} initValue={brushSizeRangeSlider.initValue} returnRangeValue={brushSizeRangeSlider.returnRangeValue} />
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
                left: open ? '16px' : '-200px'
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