import { CSSProperties, ReactNode, forwardRef, useCallback, useImperativeHandle, useState, } from "react"

type SettingPanelProps = {
    width?: string
    height?: string
    backgroundColor?: string
    triangleDirection?: 'top' | 'right' | 'bottom' | 'left',
    trianglePosition?: number
    triangleWidth?: number
    children?: ReactNode
}

export type SettingPanelRef = {
    show: () => void,
    hide: () => void,
    clickEvt: () => void
}

const SettingPanel = forwardRef<SettingPanelRef, SettingPanelProps>(({
    width = '200px',
    height = '300px',
    backgroundColor = 'lightblue',
    triangleDirection = 'left',
    trianglePosition = 20,
    triangleWidth = 10,
    children
}, ref) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsOpen(true),
        hide: () => setIsOpen(false),
        clickEvt: () => {
            if (isOpen) return setIsOpen(false);
            else return setIsOpen(true);
        }
    }));

    const genetateTriangle = useCallback((commonStyle: CSSProperties) => {
        const triangleStyle = () => {
            if (triangleDirection === 'top')
                return {
                    borderBottom: `${triangleWidth}px solid ${backgroundColor}`,
                    left: `${trianglePosition}px`,
                    top: `-${trianglePosition - 1}px`,
                };
            else if (triangleDirection === 'right')
                return {
                    borderLeft: `${triangleWidth}px solid ${backgroundColor}`,
                    right: `-${trianglePosition - 1}px`,
                    top: `${trianglePosition}px`,
                };
            else if (triangleDirection === 'bottom')
                return {
                    borderTop: `${triangleWidth}px solid ${backgroundColor}`,
                    bottom: `-${trianglePosition - 1}px`,
                    left: `${trianglePosition}px`,
                };
            else if (triangleDirection === 'left')
                return {
                    borderRight: `${triangleWidth}px solid ${backgroundColor}`,
                    left: `-${trianglePosition - 1}px`,
                    top: `${trianglePosition}px`,
                };
            else return {}
        }
        return { ...commonStyle, ...triangleStyle() }
    }, [backgroundColor, triangleDirection, trianglePosition, triangleWidth]);

    return (
        isOpen && <div
            className="setting-panel-wrapper"
            style={{
                minWidth: 'max-content',
                position: 'fixed',
                left: '0',
                top: '0',
                transform: 'translate(250px, 100px)'
            }}
        >
            <div
                className="setting-panel-content"
                style={{
                    width,
                    height,
                    borderRadius: '0.5rem',
                    backgroundColor,
                    position: 'relative',
                    padding: '12px',
                    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 14px, rgba(0, 0, 0, 0.08) 0px 0px 3.12708px, rgba(0, 0, 0, 0.17) 0px 0px 0.931014px',
                }}
            >
                <div className="triangle"
                    style={genetateTriangle({
                        position: 'absolute',
                        width: '0',
                        height: '0',
                        border: `${triangleWidth}px solid transparent`,
                    })}
                ></div>
                {children}
            </div>
        </div>
    );
});

export default SettingPanel;