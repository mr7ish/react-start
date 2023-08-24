export class UseMath {
    /**
     * 
     * @param endpoint 
     * @returns 0 ~ endpoint(contain)
     */
    static getRandom(endpoint: number) {
        return Math.ceil(Math.random() * endpoint);
    }
    /**
     * 
     * @param startpoint 
     * @param endpoint 
     * @returns startpoint ~ endpoint(contain)
     */
    static getRangeRandom(startpoint: number, endpoint: number) {
        const diff = Math.abs(startpoint - endpoint);
        return Math.ceil(Math.random() * diff) + Math.min(startpoint, endpoint);
    }
}

export class UseDate {
    /**
     * 
     * @param fn callback
     * @returns callback execution time(ms)
     */
    static fnRunTime(fn: () => void) {
        const startTime = Date.now();
        fn();
        const endTime = Date.now();
        console.log(`${endTime - startTime} ms`);
        return endTime - startTime;
    }
}