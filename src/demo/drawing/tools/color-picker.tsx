import { CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";
import SettingPanel, { SettingPanelRef } from "./setting-panel";
import { ChromePicker } from "react-color";

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

    const initActive = useMemo(() => {
        return isLight ? 'black' : 'white'
    }, [isLight]);

    const colorBlocks = useMemo(
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
                {
                    key: 'violet',
                    color: '#9c27b0'
                },
            ];
        }, [isLight]
    );

    const initColorValue = useMemo(() => {
        return colorBlocks.find(block => block.color === initColor || block.key === initColor)?.key ?? initActive;
    }, [colorBlocks, initActive, initColor]);

    const [activeKey, setActiveKey] = useState<string>(initColorValue);

    useEffect(() => {
        if (isLight && activeKey === 'white') {
            returnColor?.('black');
            setActiveKey('black')
        } else if (!isLight && activeKey === 'black') {
            returnColor?.('white');
            setActiveKey('white')
        }
    }, [activeKey, isLight, returnColor])

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
            return colorBlocks.map(block => (
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

    const ColorSettingPanelRef = useRef<SettingPanelRef | null>(null);

    const [chromeColor, setChromeColor] = useState<string>(initColor);

    const colorSettingPanelList = useCallback(() => {
        return [
            {
                key: 'color-picker',
                title: '色值选择器',
                value: (
                    <ChromePicker
                        disableAlpha
                        color={chromeColor}
                        onChange={(color) => {
                            setChromeColor(color.hex);
                            returnColor?.(color.hex);
                        }}
                        styles={{
                            default: {
                                saturation: {
                                    cursor: 'crosshair'
                                }
                            }
                        }}
                    />
                )
            }
        ];
    }, [chromeColor, returnColor]);

    const renderColorSettingPanel = useCallback(() => {
        return colorSettingPanelList().map(setting => (
            <div
                key={setting.key}
            >
                <div
                    style={{
                        fontSize: '0.75rem',
                        marginBottom: '0.5rem'
                    }}
                >
                    {setting.title}
                </div>
                <div>
                    {setting.value}
                </div>
            </div>
        ));
    }, [colorSettingPanelList]);

    return (
        <>
            <div className="color-picker-wrapper">
                <div
                    className="color-blocks"
                    onClick={(e) => {
                        const key = (e.target as HTMLDivElement).dataset['key'];
                        if (key && activeKey !== key) {
                            setActiveKey(key);
                            const color = colorBlocks.find(block => block.key === key)?.color ?? initColor;
                            returnColor?.(color);
                            setChromeColor(color);
                        }
                    }}
                >
                    {renderColorBlocks()}
                </div>
                <div className="color-setting">
                    <div
                        className="color-setting-line"
                        style={{
                            backgroundColor: isLight ? 'hsl(244, 100%, 97%)' : 'hsl(245, 10%, 21%)'
                        }}
                    >
                    </div>
                    <div className="color-setting-block"
                        title={`色值选择器: ${chromeColor}`}
                        style={commonStyle({
                            backgroundColor: chromeColor
                        })}
                        onClick={(e) => {
                            // console.log(e.target);
                            const paramsPanel = document.querySelector<HTMLDivElement>('.params-panel-wrapper');
                            const targetPos = (e.target as HTMLDivElement).getBoundingClientRect();
                            const paramsPanelPos = paramsPanel?.getBoundingClientRect() ?? { top: 0, left: 0 };

                            const pos = {
                                top: targetPos.top - paramsPanelPos.top - targetPos.height / 2,
                                left: targetPos.left - paramsPanelPos.left + 50
                            }

                            ColorSettingPanelRef.current?.clickEvt({
                                top: pos.top,
                                left: pos.left
                            });
                        }}
                    ></div>
                </div>
            </div>
            <SettingPanel
                ref={ColorSettingPanelRef}
                backgroundColor={isLight ? '#fff' : '#232329'}
                // widthAdaptive
                heightAdaptive
            >
                {renderColorSettingPanel()}
            </SettingPanel>
        </>
    );
}

export default ColorPicker;