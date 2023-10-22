import { AnyFn, Fn } from "./types";

/**
 * composition of Math utils
 */
export class UseMath {
    /**
     * 
     * @param endpoint 
     * @returns 0 ~ endpoint(contain)
     */
    static getRandom(endpoint: number) {
        return Math.round(Math.random() * endpoint);
    }
    /**
     * 
     * @param startpoint 
     * @param endpoint 
     * @returns startpoint ~ endpoint(contain)
     */
    static getRangeRandom(startpoint: number, endpoint: number) {
        const diff = Math.abs(startpoint - endpoint);
        return Math.round(Math.random() * diff) + Math.min(startpoint, endpoint);
    }
}

/**
 * composition of Time(Date) utils
 */
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
    /**
     * 
     * @returns time stamp
     */
    static timestamp() {
        return +Date.now();
    }
}

type GetNumbersType = 'positive' | 'negative' | 'both';

/**
 * composition of get some datas
 */
export class UseGenerateDatas {
    /**
     * 
     * @returns all letters array
     */
    static getLetters() {
        const letters: string[] = [];
        const uppercaseA = 'A'.charCodeAt(0);
        for (let i = 0; i < 26; i++) {
            const nextLetter = String.fromCharCode(uppercaseA + i);
            letters.push(nextLetter);
            letters.push(String.fromCharCode(nextLetter.charCodeAt(0) + 32));
        }
        return letters;
    }
    
    /**
     * 
     * @param range number
     * @param type  number of 'positive' | 'negative' | 'both'
     * @returns numbers array
     */
    static getNumbers(range: number, type: GetNumbersType) {
        const numbers: number[] = [];
        let standard = UseMath.getRandom(range);

        const handle = {
            positive(num: number) {
                numbers.push(num);
            },
            negative(num: number) {
                numbers.push(num * -1);
            },
            both(num: number) {
                numbers.push(Math.random() > 0.5 ? num : num * -1);
            }
        }

        const push = handle[type] ?? handle['positive'];

        while (standard >= 0) {
            push(standard--);
        }
        console.log(numbers);
        
        return numbers;
    }

}

/**
 * composition of timer
 */
export class UseTimer {
    /**
     * a wrapper for setInterval with controls
     * @param cb 
     * @param time
     * @param options
     */
    static intervalFn(cb: Fn, time: number = 1000, options = { immediateCallback: false }) {
        const { immediateCallback } = options;
        let timer: ReturnType<typeof setInterval> | null = null;

        let isActive: boolean = false;

        const clear = () => {
            if(timer) {
                clearInterval(timer);
                timer = null;
            }
        }
        
        const pause = () => {
            isActive = false;
            clear();
        }

        const resume = () => {
            if(time <= 0) return;
            isActive = true;
            if(immediateCallback) cb();
            clear();
            timer = setInterval(cb, time);
        }

        if(UseIs.isClient()) resume();

        return {
            isActive,
            pause,
            resume
        }
    }

    /**
     * a wrapper for setTimeout with controls
     * @param cb 
     * @param time 
     */
    static timeoutFn<CallbackFn extends AnyFn>(cb: CallbackFn, time: number) {
        let timer: ReturnType<typeof setTimeout> | null = null;

        let isPending: boolean = false;

        const clear = () => {
            if(timer) {
                clearTimeout(timer);
                timer = null;
            }
        }

        const stop = () => {
            isPending = false;
            clear();
        }

        const start = (...args: Parameters<CallbackFn> | []) => {
            clear();
            isPending = true;
            timer = setTimeout(() => {
                isPending = false;
                timer = null;
                cb(...args);
            }, time);
        }

        if(UseIs.isClient()) start();

        return {
            isPending,
            stop,
            start
        }
    }
}

/**
 * composition of is something
 */
export class UseIs {
    /**
     * 
     * @returns is client or not
     */
    static isClient() {
        return typeof window !== 'undefined' && typeof document !== 'undefined';
    }

    /**
     * 
     * @returns is ios or not
     */
    static isIOS() {
        return this.isClient() && window?.navigator?.userAgent && /iP(ad|hone|od)/.test(window.navigator.userAgent);
    }
}

export const defaultWindow = /* #__PURE__ */ UseIs.isClient() ? window : undefined;
export const defaultDocument = /* #__PURE__ */ UseIs.isClient() ? window.document : undefined;
export const defaultNavigator = /* #__PURE__ */ UseIs.isClient() ? window.navigator : undefined;
export const defaultLocation = /* #__PURE__ */ UseIs.isClient() ? window.location : undefined;

/**
 * if the condition is true and the function will be executed
 * @param executedCondition 
 * @param toBeExecutedFn 
 * @returns 
 */
export const callFnSecurely = (executedCondition?: boolean | null | undefined, toBeExecutedFn?: AnyFn) => {
    if(!executedCondition) return;
    toBeExecutedFn?.();
}