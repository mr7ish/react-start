import { useEffect, useRef, useState } from "react";
import { Arrow, Draw, Ellipse, Line, Rectangle, Stylus } from "../svg";
import { useDraggable } from "@/hooks/useDraggable";
import { DrawingMode } from "drauu";

type ToolBarProps = {
    initMode?: DrawingMode
    returnActiveKey?: (toolbarActiveKey: DrawingMode) => void
}

const ToolBar = ({
    initMode = 'draw',
    returnActiveKey
}: ToolBarProps) => {
    const toolIconSize = 36;
    const [activeKey, setActiveKey] = useState<DrawingMode>(initMode);

    const [activeDragging, setActiveDragging] = useState<boolean>(false);

    const toobarRef = useRef<HTMLDivElement | null>(null);

    const toolbar = [
        {
            key: 'draw',
            title: '绘画',
            padding: (isFilled: boolean) => isFilled ? 8 : 6,
            icon: (isFilled: boolean) => <Draw isFilled={isFilled} polygonFillColor="#B2AEFF" circleFillColor="#4F4D6F" borderFillColor="#4F4D6F" borderUnfilledColor="#b8b8b8" />,
        },
        {
            key: 'stylus',
            title: '手写',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" borderUnfilledColor="#b8b8b8" />
        },
        {
            key: 'line',
            title: '线',
            padding: (isFilled: boolean) => isFilled ? 10 : 8,
            icon: (isFilled: boolean) => <Line borderColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
        },
        {
            key: 'arrow',
            title: '箭头',
            padding: (isFilled: boolean) => isFilled ? 11 : 10,
            icon: (isFilled: boolean) => <Arrow borderColor={isFilled ? '#B2AEFF' : '#b8b8b8'} />
        },
        {
            key: 'rectangle',
            title: '矩形',
            padding: (isFilled: boolean) => isFilled ? 10 : 9,
            icon: (isFilled: boolean) => <Rectangle isFilled={isFilled} polygonFillColor="#B2AEFF" borderFillColor="#B2AEFF" borderUnfilledColor="#b8b8b8" />
        },
        {
            key: 'ellipse',
            title: '椭圆',
            padding: (isFilled: boolean) => isFilled ? 10 : 9,
            icon: (isFilled: boolean) => <Ellipse isFilled={isFilled} ellipseFillColor="#B2AEFF" borderFillColor="#B2AEFF" borderUnfilledColor="#b8b8b8" />
        },
        {
            key: 'eraseLine',
            title: '擦除',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" borderUnfilledColor="#b8b8b8" />
        }
    ];

    const renderToolbarIcons = () => {
        return toolbar.map(tool => (
            <div
                key={tool.key}
                className="tool-icon"
                title={tool.title}
                data-key={tool.key}
                style={{
                    width: toolIconSize,
                    height: toolIconSize,
                    padding: tool.padding(activeKey === tool.key),
                    backgroundColor: activeKey === tool.key ? '#4F4D6F' : ''
                }}
            >
                {tool.icon(activeKey === tool.key)}
            </div>
        ))
    }

    const { x, y, mount, unmount } = useDraggable(toobarRef.current as unknown as HTMLElement, { initPosition: { x: document.documentElement.clientWidth / 2 - 105, y: 10 }, });

    // useEffect(() => {
    //     console.log('isDragging =>', isDragging);
    //     console.log('position =>', position);
    // }, [isDragging, position]);

    useEffect(() => {
        mount();
        return () => {
            // console.log('unmount previous');
            unmount();
        }
    }, [mount, unmount]);

    return (
        <div
            ref={toobarRef}
            className="toolbar-wrapper"
            style={{
                left: `${x}px`,
                top: `${y}px`,
            }}
            onPointerEnter={
                () => {
                    if (!activeDragging) setActiveDragging(true);
                }
            }
        >
            <div
                className="toolbar"
                onClick={(e) => {
                    const key = ((e.target as HTMLElement).dataset['key'] ?? 'draw') as DrawingMode;
                    if (key && activeKey !== key) {
                        console.log(key);
                        setActiveKey(key);
                        returnActiveKey?.(key);
                    }
                }}
            >
                {renderToolbarIcons()}
            </div>
        </div>
    );
}

export default ToolBar;