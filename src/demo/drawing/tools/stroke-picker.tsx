import { DashLine, DottedLine, SolidLine } from "@/demo/svg";
import { useCallback, useMemo, useState } from "react";

export type StrokePattern = 'dashed' | 'dotted' | 'solid';

type StrokePickerProps = {
    initPattern?: StrokePattern
    returnStrokePattern?: (pattern: StrokePattern) => void
}

const StrokePicker = ({
    initPattern = 'solid',
    returnStrokePattern
}: StrokePickerProps) => {
    const iconSize = 30;
    const [activeKey, setActiveKey] = useState<StrokePattern>(initPattern);
    const strokeList = useMemo(() => {
        return [
            {
                key: 'solid',
                title: '实线',
                padding: 5,
                icon: (isFilled: boolean) => <SolidLine originalStyle={{ pointerEvents: 'none' }} filledColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
            },
            {
                key: 'dashed',
                title: '虚线',
                padding: 3,
                icon: (isFilled: boolean) => <DashLine originalStyle={{ pointerEvents: 'none' }} filledColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
            },
            {
                key: 'dotted',
                title: '点虚线',
                padding: 5,
                icon: (isFilled: boolean) => <DottedLine originalStyle={{ pointerEvents: 'none' }} filledColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
            }
        ]
    }, []);

    const renderStrokeList = useCallback(() => {
        return strokeList.map(stroke => (
            <div
                key={stroke.key}
                title={stroke.title}
                data-key={stroke.key}
                style={{
                    width: iconSize,
                    height: iconSize,
                    padding: stroke.padding,
                    paddingTop: stroke.padding - 0.5,
                    backgroundColor: '#4F4D6F',
                    borderRadius: '0.45rem',
                    cursor: 'pointer'
                }}
            >
                {stroke.icon(activeKey === stroke.key)}
            </div>
        ))
    }, [activeKey, strokeList]);

    return (
        <div className="stroke-picker-wrapper"
            style={{
                display: 'flex',
                gap: '8px'
            }}
            onClick={(e) => {
                const key = (e.target as HTMLElement).dataset['key'] as StrokePattern;
                if (key && activeKey !== key) {
                    console.log(key);
                    setActiveKey(key);
                    returnStrokePattern?.(key);
                }
            }}
        >
            {renderStrokeList()}
        </div>
    );
}

export default StrokePicker;