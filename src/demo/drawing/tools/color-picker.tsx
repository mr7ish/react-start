import { useCallback, useState } from "react";

type ColorPickerProps = {
    isLight?: boolean
    initColor?: string
    returnColor?: (color: string) => void
}

const ColorPicker = ({
    isLight = true,
    initColor = '#87CEEB',
    returnColor
}: ColorPickerProps) => {

    const initActive = useCallback(() => {
        return isLight ? 'black' : 'white'
    }, [isLight]);

    const colorBlocks = useCallback(
        () => {
            return [
                {
                    key: `${isLight ? 'black' : 'white'}`,
                    color: `${isLight ? '#000000' : '#ffffff'}`
                },
                {
                    key: 'pink',
                    color: '#FF8DBC'
                },
                {
                    key: 'skyblue',
                    color: '#87CEEB'
                },
                {
                    key: 'green',
                    color: '#68BC00'
                },
                {
                    key: 'orange',
                    color: '#FE9200'
                },
            ];
        }, [isLight]
    );

    const initColorValue = useCallback(() => {
        return colorBlocks().find(block => block.color === initColor || block.key === initColor)?.key ?? initActive();
    }, [colorBlocks, initActive, initColor]);

    const [activeKey, setActiveKey] = useState<string>(initColorValue());

    const renderColorBlocks = useCallback(
        () => {
            return colorBlocks().map(block => (
                <div
                    key={block.key}
                    title={block.key}
                    data-key={block.key}
                    className={isLight ? activeKey === block.key ? 'block-light-active' : '' : activeKey === block.key ? 'block-dark-active' : ''}
                    style={{
                        width: '21px',
                        height: '21px',
                        borderRadius: '0.25rem',
                        backgroundColor: block.color,
                        // border: '1px solid #d6d6d6',
                        cursor: 'pointer',
                        // boxShadow: activeKey === block.key ? `2px 2px 2px 1px ${block.key !== 'black' ? 'rgba(0, 0, 0, 0.2)' : ''} inset` : 'none'
                    }}

                ></div>
            ));
        }, [activeKey, colorBlocks, isLight]
    );

    return (
        <div className="color-picker-wrapper">
            <div
                className="color-blocks"
                onClick={(e) => {
                    const key = (e.target as HTMLDivElement).dataset['key'];
                    console.log(key);
                    if (key && activeKey !== key) {
                        setActiveKey(key);
                        returnColor?.(colorBlocks().find(block => block.key === key)?.color ?? '');
                    }
                }}
            >
                {renderColorBlocks()}
            </div>
            <div className="color-picker"></div>
        </div>
    );
}

export default ColorPicker;