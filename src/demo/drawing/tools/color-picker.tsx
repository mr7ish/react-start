import { CSSProperties, useCallback, useEffect, useState } from "react";

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
                // {
                //     key: 'violet',
                //     color: '#9c27b0'
                // },
            ];
        }, [isLight]
    );

    const initColorValue = useCallback(() => {
        return colorBlocks().find(block => block.color === initColor || block.key === initColor)?.key ?? initActive();
    }, [colorBlocks, initActive, initColor]);

    const [activeKey, setActiveKey] = useState<string>(initColorValue());

    // TO Check
    useEffect(() => {
        // console.log(initColorValue());
        setActiveKey(initColorValue());
        returnColor?.(initColorValue());
    }, [initColorValue, returnColor])

    const diffClassName = useCallback(
        (_block: { key: string, color: string }) => {
            if (isLight) {
                if (activeKey === _block.key && _block.key === 'black') return 'block-light-active_black';
                else if (activeKey === _block.key && _block.key !== 'black') return 'block-light-active';
                else return '';
            } else {
                if (activeKey === _block.key) return 'block-dark-active';
                else return '';
            }
        }, [activeKey, isLight]
    );

    const commonStyle = useCallback(
        (diffStyle: CSSProperties) => {
            const common = {
                width: '21px',
                height: '21px',
                borderRadius: '0.25rem',
                cursor: 'pointer',
            }
            return {
                ...common,
                ...diffStyle
            }
        }, []
    );

    const renderColorBlocks = useCallback(
        () => {
            return colorBlocks().map(block => (
                <div
                    key={block.key}
                    title={block.key}
                    data-key={block.key}
                    className={diffClassName(block)}
                    style={commonStyle({
                        backgroundColor: block.color,
                    })}

                ></div>
            ));
        }, [colorBlocks, commonStyle, diffClassName]
    );

    return (
        <div className="color-picker-wrapper">
            <div
                className="color-blocks"
                onClick={(e) => {
                    const key = (e.target as HTMLDivElement).dataset['key'];
                    console.log(key);
                    console.log(activeKey);

                    if (key && activeKey !== key) {
                        setActiveKey(key);
                        returnColor?.(colorBlocks().find(block => block.key === key)?.color ?? '');
                    }
                }}
            >
                {renderColorBlocks()}
            </div>
            <div className="color-picker">
                <div className="color-picker-setting"
                    style={commonStyle({
                        backgroundColor: colorBlocks().find(block => block.key === activeKey)?.color ?? ''
                    })}
                ></div>
            </div>
        </div>
    );
}

export default ColorPicker;