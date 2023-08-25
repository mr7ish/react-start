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