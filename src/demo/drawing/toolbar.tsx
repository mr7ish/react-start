
const ToolBar = () => {


    const toolbar = [
        {
            key: 'draw',
            title: '绘画',
        },
        {
            key: 'stylus',
            title: '手写',
        },
        {
            key: 'line',
            title: '线',
        },
        {
            key: 'arrow',
            title: '箭头',
        },
        {
            key: 'rectangle',
            title: '矩形',
        },
        {
            key: 'ellipse',
            title: '椭圆',
        },
        {
            key: 'eraseLine',
            title: '擦除',
        }
    ];

    const renderToolbar = () => {
        return toolbar.map(tool => (
            <div className="tool-icon" title={tool.title}>

            </div>
        ))
    }

    return (
        <div className="toolbar-wrapper">
            <div className="toolbar">
                {renderToolbar()}
            </div>
        </div>
    );
}

export default ToolBar;