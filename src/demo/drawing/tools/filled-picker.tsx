import { Solid, Transparent } from "@/demo/svg";
import { useCallback, useMemo, useState } from "react";

type FilledPickerProps = {
    initFilled?: boolean
    returnIsFilled?: (isFilled: boolean) => void
}

const FilledPicker = ({
    initFilled = false,
    returnIsFilled
}: FilledPickerProps) => {
    const iconSize = 30;

    const [activeKey, setActiveKey] = useState<string>(!initFilled ? 'unfilled' : 'filled');

    const filledList = useMemo(() => {
        return [
            {
                key: 'unfilled',
                title: '空心',
                padding: 1,
                icon: (isFilled: boolean) => <Transparent originalStyle={{ pointerEvents: 'none' }} filledColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
            },
            {
                key: 'filled',
                title: '实心',
                padding: 7,
                icon: (isFilled: boolean) => <Solid originalStyle={{ pointerEvents: 'none' }} filledColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
            }
        ]
    }, []);

    const renderFilledList = useCallback(() => {
        return filledList.map(filled => (
            <div
                key={filled.key}
                title={filled.title}
                data-key={filled.key}
                style={{
                    width: iconSize,
                    height: iconSize,
                    padding: filled.padding,
                    paddingTop: filled.padding - 0.5,
                    backgroundColor: '#4F4D6F',
                    borderRadius: '0.45rem',
                    cursor: 'pointer'
                }}
            >
                {filled.icon(activeKey === filled.key)}
            </div>
        ))
    }, [activeKey, filledList]);

    return (
        <div className="filled-picker-wrapper"
            style={{
                display: 'flex',
                gap: '8px'
            }}
            onClick={(e) => {
                const key = (e.target as HTMLElement).dataset['key'];
                if (key && activeKey !== key) {
                    console.log(key);
                    setActiveKey(key);
                    returnIsFilled?.(key === 'filled');
                }
            }}
        >
            {renderFilledList()}
        </div>
    );
}

export default FilledPicker;