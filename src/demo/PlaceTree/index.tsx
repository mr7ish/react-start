import { useState } from 'react';
import { initialTravelPlan } from './places';
import './index.less';
import Mouse from '../mouseMoving/mouseMoving';

type Position = {
    x: number
    y: number
}

type Tree = {
    origins: {
        [propsName: number]: {
            id: number;
            title: string;
            childIds: number[];
        }
    },
    id: number
}

const Tree = ({ origins, id }: Tree) => {
    const self = origins[id];
    const childIds = self.childIds;
    return (
        <div style={{
            flex: 1
        }}>
            <h4
                style={{
                    color: childIds.length > 0 ? '#41B883' : ''
                }}
            >
                {self.title}
            </h4>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '30px'
            }}>
                {
                    childIds.map(id => (
                        <Tree
                            origins={origins}
                            id={id}
                            key={id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

const Root = () => {
    const [position, setPosition] = useState<Position>({
        x: 0,
        y: 0
    });

    const [isDark, setIsDark] = useState(false);

    const mouseMoving = (e: React.MouseEvent) => {
        const scrollTop = document.documentElement.scrollTop ?? 0;
        const scrollLeft = document.documentElement.scrollLeft ?? 0;

        setPosition({
            x: e.clientX + scrollLeft,
            y: e.clientY + scrollTop
        })
        // console.log(position);
    }

    const onToggleStatus = (status: boolean) => {
        setIsDark(status);
    }

    const root = initialTravelPlan[0];
    const childIds = root.childIds;
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
            }}
            onPointerMove={mouseMoving}
        >
            <div style={{
                flex: 1,
                padding: '2% 5%'
            }}>
                <h2>Some Places</h2>
                <div style={{
                    display: 'flex',
                }}>
                    {
                        childIds.map(id => (
                            <Tree
                                origins={initialTravelPlan}
                                id={id}
                                key={id}
                            />)
                        )
                    }
                </div>
            </div>
            <Toggle toggleStatusCallBack={onToggleStatus} />
            {isDark && <Mouse position={position} />}
        </div>
    )
}

const toggleMode = (toggle: boolean) => {
    toggle ? document.documentElement.classList.remove('dark')
        : document.documentElement.classList.add('dark');
}

const Toggle = ({ toggleStatusCallBack }: { toggleStatusCallBack: (status: boolean) => void }) => {
    const [isSun, setIsSun] = useState(true);
    const toggle = () => {
        setIsSun(!isSun);
        toggleStatusCallBack(isSun);
        toggleMode(!isSun);
    }

    return (
        <div
            className='toggle'
            onClick={toggle}
            style={{
                borderColor: `${isSun ? 'rgba(60, 60, 67, .29)' : 'rgba(82, 82, 89, .68)'}`
            }}
            title={isSun ? 'sun theme' : 'dark theme'}
        >
            <div
                className="wrapper"
                style={{
                    transform: `translateX(${isSun ? 0 : 18}px)`,
                    backgroundColor: `${isSun ? '#fff' : '#000'}`,
                }}
            >
                {
                    isSun ?
                        <Sun className={isSun ? 'icon rotate' : ''} /> :
                        <Moon className={isSun ? '' : 'icon rotate'} />
                }
            </div>
        </div>
    )
}

const Moon = ({ className }: { className: string }) => {
    return (
        <svg className={className} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13130" width="200" height="200">
            <path d="M530.432 945.3568A434.176 434.176 0 0 1 491.52 78.6432a40.96 40.96 0 0 1 26.0096 70.8608 261.7344 261.7344 0 0 0-83.5584 192.3072 266.24 266.24 0 0 0 266.24 266.24 262.3488 262.3488 0 0 0 191.6928-82.944s0 1.024 0 0a40.96 40.96 0 0 1 70.656 24.576 434.176 434.176 0 0 1-432.128 395.6736z m0 0" p-id="13131" fill="#FFD500"></path>
        </svg>
    )
}

const Sun = ({ className }: { className: string }) => {
    return (
        <svg className={className} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="740" width="200" height="200">
            <path d="M501.48 493.55m-233.03 0a233.03 233.03 0 1 0 466.06 0 233.03 233.03 0 1 0-466.06 0Z" fill="#FFD500" p-id="741"></path>
            <path d="M501.52 185.35H478.9c-8.28 0-15-6.72-15-15V87.59c0-8.28 6.72-15 15-15h22.62c8.28 0 15 6.72 15 15v82.76c0 8.28-6.72 15-15 15zM281.37 262.76l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.86-5.86-15.36 0-21.21l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.35 0 21.21zM185.76 478.48v22.62c0 8.28-6.72 15-15 15H88c-8.28 0-15-6.72-15-15v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15zM270.69 698.63l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.36 5.86-21.21 0l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.85-5.86 15.35-5.86 21.21 0zM486.41 794.24h22.62c8.28 0 15 6.72 15 15V892c0 8.28-6.72 15-15 15h-22.62c-8.28 0-15-6.72-15-15v-82.76c0-8.28 6.72-15 15-15zM706.56 709.31l16-16c5.86-5.86 15.36-5.86 21.21 0l58.52 58.52c5.86 5.86 5.86 15.36 0 21.21l-16 16c-5.86 5.86-15.36 5.86-21.21 0l-58.52-58.52c-5.86-5.85-5.86-15.35 0-21.21zM802.17 493.59v-22.62c0-8.28 6.72-15 15-15h82.76c8.28 0 15 6.72 15 15v22.62c0 8.28-6.72 15-15 15h-82.76c-8.28 0-15-6.72-15-15zM717.24 273.44l-16-16c-5.86-5.86-5.86-15.36 0-21.21l58.52-58.52c5.86-5.86 15.36-5.86 21.21 0l16 16c5.86 5.86 5.86 15.36 0 21.21l-58.52 58.52c-5.86 5.86-15.35 5.86-21.21 0z" fill="#FFD500" p-id="742"></path>
        </svg>
    )
}

export default Root;