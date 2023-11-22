import { CSSProperties, ReactNode, forwardRef, useCallback, useImperativeHandle, useState, } from "react"

type SettingPanelProps = {
    width?: string
    widthAdaptive?: boolean
    height?: string
    heightAdaptive?: boolean
    backgroundColor?: string
    triangleDirection?: 'top' | 'right' | 'bottom' | 'left',
    trianglePosition?: number
    triangleWidth?: number
    children?: ReactNode
}

type SettingPanelPosition = {
    top: number
    left: number
}

export type SettingPanelRef = {
    show: () => void,
    hide: () => void,
    clickEvt: (position: SettingPanelPosition) => void
}

const SettingPanel = forwardRef<SettingPanelRef, SettingPanelProps>(({
    width = '200px',
    height = '300px',
    widthAdaptive = false,
    heightAdaptive = false,
    backgroundColor = '#fff',
    triangleDirection = 'left',
    trianglePosition = 20,
    triangleWidth = 20,
    children
}, ref) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [postion, setPosition] = useState<SettingPanelPosition>({
        top: 0,
        left: 0
    })

    useImperativeHandle(ref, () => ({
        show: () => setIsOpen(true),
        hide: () => setIsOpen(false),
        clickEvt: (position) => {
            if (isOpen) return setIsOpen(false);
            else {
                setIsOpen(true);
                setPosition({ ...position })
            }
        }
    }));

    const generateTriangle = useCallback(() => {
        const calcRotate = () => {
            if (triangleDirection === 'top')
                return 180;
            else if (triangleDirection === 'right')
                return -90;
            else if (triangleDirection === 'bottom')
                return 0;
            else if (triangleDirection === 'left')
                return 90;
            return 90;
        }

        const calcPosition = () => {
            if (triangleDirection === 'top')
                return {
                    left: `${trianglePosition}px`,
                    top: `-4px`,
                }
            else if (triangleDirection === 'right')
                return {
                    right: `-${trianglePosition - 1}px`,
                    top: `${trianglePosition}px`,
                }
            else if (triangleDirection === 'bottom')
                return {
                    bottom: `-4px`,
                    left: `${trianglePosition}px`,
                };
            else if (triangleDirection === 'left')
                return {
                    left: `1px`,
                    top: `${trianglePosition}px`,
                };
            else return {};
        }

        const triangleStyle = () => {
            return {
                ...calcPosition(),
                position: 'absolute',
                transformOrigin: '0px 0px',
                transform: `translateY(50%) rotate(${calcRotate()}deg) translateX(-50%)`
            }
        }

        return (
            <span
                style={triangleStyle() as CSSProperties}
            >
                <svg
                    style={{
                        width: `${triangleWidth}px`,
                        height: `${triangleWidth / 2}px`,
                        display: 'block',
                        overflow: 'visible',
                        fill: backgroundColor,
                        filter: 'drop-shadow(rgba(0, 0, 0, 0.05) 0px 3px 2px)'
                    }}
                >
                    <polygon
                        style={{
                            height: '100%'
                        }}
                        points={`0,0 ${triangleWidth},0 ${triangleWidth / 2},${triangleWidth / 2}`}>
                    </polygon>
                </svg>
            </span>
        )
    }, [backgroundColor, triangleDirection, trianglePosition, triangleWidth]);

    return (
        isOpen && <div
            className="setting-panel-wrapper"
            style={{
                minWidth: 'max-content',
                position: 'fixed',
                left: '0',
                top: '0',
                transform: `translate(${postion.left}px, ${postion.top}px)`
            }}
        >
            <div
                className="setting-panel-content"
                style={{
                    width: widthAdaptive ? 'auto' : width,
                    height: heightAdaptive ? 'auto' : height,
                    borderRadius: '0.5rem',
                    backgroundColor,
                    position: 'relative',
                    padding: '12px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 0px 3.12708px, rgba(0, 0, 0, 0.17) 0px 0px 0.931014px',
                }}
            >
                {generateTriangle()}
                {children}
            </div>
        </div>
    );
});

export default SettingPanel;