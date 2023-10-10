// import { TwoSum } from "./twoSum";
// import { TwoNumPlus } from './twoNumPlus';

import { useIdle } from "@/utils/hooks";
import { useEffect } from "react";


const Algorithems = () => {
    // const towsum = new TwoSum(6);
    // towsum.output('hashMap').output('exhaust');

    // const twoNumPlus = new TwoNumPlus();
    // twoNumPlus.log();
    // twoNumPlus.sum();
    const { listen, isIdle, idleTime, cleanup } = useIdle({ timeout: 5000 });

    useEffect(() => {
        console.log('isIdle =>', isIdle);
    }, [isIdle]);

    useEffect(() => {
        console.log('idleTime =>', idleTime);

    }, [idleTime]);

    return (
        <>
            <button
                onClick={listen}
            >listen</button>
            <button
                onClick={cleanup}
            >stop</button>
        </>
    );
}

export default Algorithems;