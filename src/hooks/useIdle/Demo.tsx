import { useEffect, useState } from "react";
import { useIdle } from "./index";
import Toggle from "@/demo/toggle";
import './index.less';

const Demo = () => {
    const [isLight, setIsLight] = useState(true);

    const { listen, isIdle, idleTime, cleanup } = useIdle({ timeout: 5000 });

    useEffect(() => {
        console.log('isIdle =>', isIdle);
    }, [isIdle]);

    useEffect(() => {
        console.log('idleTime =>', idleTime);

    }, [idleTime]);

    return (
        <div className="idle-demo">
            <Toggle backMode={(_isLight) => { setIsLight(_isLight) }}/>
            <div 
                className="idle-content" 
                style={{
                    backgroundColor: isLight ? '#FAFAFA' : '#18181A'
                }}
            >
                <div>
                    空闲：<span style={{color: '#3EAF7C', fontWeight: 600}}>{isIdle ? 'true' : 'false'}</span>
                </div>
                <div>
                    空闲了：<span style={{color: '#3EAF7C', fontWeight: 600}}>{idleTime}</span>s
                </div>
                <div>
                    <button
                        onClick={listen}
                    >listen</button>
                    <button
                        onClick={cleanup}
                    >stop</button>
                </div>

            </div>
            


        </div>
    )

}

export default Demo;