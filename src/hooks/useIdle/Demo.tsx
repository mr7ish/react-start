import { useEffect } from "react";
import { useIdle } from "./index";
import Toggle from "@/demo/toggle";

const Demo = () => {

    const { listen, isIdle, idleTime, cleanup } = useIdle({ timeout: 5000 });

    useEffect(() => {
        console.log('isIdle =>', isIdle);
    }, [isIdle]);

    useEffect(() => {
        console.log('idleTime =>', idleTime);

    }, [idleTime]);

    return (
        <div className="idle-demo">
            <div>
                <Toggle />

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
    )

}

export default Demo;