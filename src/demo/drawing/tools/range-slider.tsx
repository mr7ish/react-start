import { useMemo, useState } from 'react';
import './index.less';

type RangeSliderProps = {
    min?: number
    max?: number
    step?: number
    label?: string
    initValue?: number
    width?: number | string
    /**
     * the range for number is 0 - 10
     */
    height?: number
    backgroundColor?: string
    returnRangeValue: (rangeValue: number) => void
}

const RangeSlider = ({
    min = 0,
    max = 100,
    step = 10,
    backgroundColor = '#0075FF',
    label = 'slider',
    initValue = 0,
    width = 175,
    height = 10,
    returnRangeValue
}: RangeSliderProps) => {

    const [value, setValue] = useState<number>(initValue);

    const changeSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.valueAsNumber ?? 0;
        setValue(targetValue);
        returnRangeValue(targetValue);
    }

    const usableValue = useMemo(() => {
        if (height < 0) return 1;
        if (height > 10) return 10;
        return height;
    }, [height]);

    return (
        <div
            className="range-slider-wrapper"
            style={{
                width,
            }}
        >
            <label className="range-slider-label">
                {label}
                <input
                    className='range-slider-input'
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    onChange={changeSlider}
                    title={value + ''}
                    value={value}
                    style={{
                        height: usableValue,
                        backgroundColor
                    }}
                />
            </label>

        </div>
    )
}

export default RangeSlider;