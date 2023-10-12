import { useState } from "react";
import { Draw, Stylus } from "../svg";

type ToolBarProps = {
    returnActiveKey?: (toolbarActiveKey: string) => void
}

const ToolBar = ({
    returnActiveKey
}: ToolBarProps) => {
    const toolIconSize = 36;
    const [activeKey, setActiveKey] = useState<string>('draw');

    const toolbar = [
        {
            key: 'draw',
            title: '绘画',
            padding: (isFilled: boolean) => isFilled ? 8 : 6,
            icon: (isFilled: boolean) => <Draw isFilled={isFilled} polygonFillColor="#B2AEFF" circleFillColor="#4F4D6F" borderFillColor="#4F4D6F" />,
        },
        {
            key: 'stylus',
            title: '手写',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        },
        {
            key: 'line',
            title: '线',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        },
        {
            key: 'arrow',
            title: '箭头',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        },
        {
            key: 'rectangle',
            title: '矩形',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        },
        {
            key: 'ellipse',
            title: '椭圆',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        },
        {
            key: 'eraseLine',
            title: '擦除',
            padding: (isFilled: boolean) => isFilled ? 10 : 6.5,
            icon: (isFilled: boolean) => <Stylus isFilled={isFilled} polygonFillColor="#F4A833" rectFillColor="#D85F1E" borderFillColor="#000" />
        }
    ];

    const renderToolbar = () => {
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

    return (
        <div className="toolbar-wrapper">
            <div
                className="toolbar"
                onClick={(e) => {
                    const key = (e.target as HTMLElement).dataset['key'] ?? '';
                    if (key && activeKey !== key) {
                        console.log(key);
                        setActiveKey(key);
                        returnActiveKey?.(key);
                    }

                }}
            >
                {renderToolbar()}
            </div>
        </div>
    );
}

export default ToolBar;