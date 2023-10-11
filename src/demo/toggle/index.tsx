import { useEffect, useState } from "react";
import { Moon, Sun } from "../svg";
import './index.less';

type ToggleProps = {
    backMode?: (lightStatus: boolean) => void
}

const Toggle: React.FC<ToggleProps> = ({
    backMode
}) => {
    const [isLight, setIsLight] = useState(true);

    const changeStyle = (_isLight: boolean) => {
        if (_isLight) return document.documentElement.classList.remove('dark');
        return document.documentElement.classList.add('dark');
    }

    useEffect(() => {
        changeStyle(isLight);
        backMode?.(isLight)
    }, [backMode, isLight]);

    const onToggle = () => {
        setIsLight(!isLight);
    }

    return (
        <div
            className='toggle'
            onClick={onToggle}
            style={{
                borderColor: `${isLight ? 'rgba(60, 60, 67, .29)' : 'rgba(82, 82, 89, .68)'}`,
            }}
            title={isLight ? 'light theme' : 'dark theme'}
        >
            <div
                className="wrapper"
                style={{
                    transform: `translateX(${isLight ? 0 : 18}px)`,
                    backgroundColor: `${isLight ? '#fff' : '#000'}`,
                }}
            >
                {
                    isLight ?
                        <Sun /> :
                        <Moon />
                }
            </div>
        </div>
    )


}

export default Toggle;