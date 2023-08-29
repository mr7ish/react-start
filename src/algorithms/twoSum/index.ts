import { UseMath, UseDate } from '../../utils';
/**
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
 */
export class TwoSum {
    nums: number[]
    target: number

    constructor(target: number) {
        this.nums = Array(UseMath.getRangeRandom(2,10)).fill(1).map( num => num * UseMath.getRandom(10));
        this.target = target;
        console.log(this.nums);
    }

    /**
     * 穷举
     */
    exhaust() {
        const hosts: number[] = [];

        for(let i = 0; i < this.nums.length - 1; i++) {
            if(hosts.includes(this.nums[i])) continue;  // optimize
            hosts.push(this.nums[i]);

            const challengers: number[] = [];

            for(let j = i + 1; j < this.nums.length; j++) {
                if(challengers.includes(this.nums[j])) continue; // optimize
                challengers.push(this.nums[j]);

                console.log(`擂主 => ${this.nums[i]}`, `挑战者 => ${this.nums[j]}`);

                if(this.nums[i] + this.nums[j] === this.target) {
                    console.log('result => ' , [i, j]);
                    return [i, j];
                }
            }
        }
        console.log(`not find`);
        return `not find`;
    }

    /**
     * 双指针(关键要对数组进行排序)
     */
    doublePointer() {
        let leftPointer = 0;
        let rightPointer = this.nums.length - 1;

        const nums = [...this.nums];
        nums.sort((a, b) => a - b); // key step
        console.log(`sort =>`, nums);

        while(leftPointer < rightPointer) {
            const sum = nums[leftPointer] + nums[rightPointer];
            console.log(`sum => ${sum}`);

            if(sum < this.target) {
                leftPointer++;
            } else if(sum > this.target) {
                rightPointer--;
            } else {
                console.log('result => ', [leftPointer, rightPointer]);
                return [leftPointer, rightPointer];
            }
        }
        console.log(`not find`);
        return `not find`;
    }

    /**
     * 值索引映射
     */
    hashMap() {
        const valIndexMap = new Map();  // val -> index mapper

        for(let i = 0; i < this.nums.length; i++) {
            const required = this.target - this.nums[i];
            console.log(valIndexMap, `target => ${this.target}, required => ${required}`);
            
            if(valIndexMap.has(required)) {
                console.log(`result => `, [valIndexMap.get(required), i]);
                return [valIndexMap.get(required), i];
            }
            valIndexMap.set(this.nums[i], i);
        }
        console.log(`not find`);
        return `not find`;
    }

    /**
     * 输出(支持链式调用)
     * @param types 穷举 | 双指针 | 值索引映射
     * @returns this
     */
    output(types: 'exhaust' | 'doublePointer' | 'hashMap') {
        const lib = {
            exhaust: () => { UseDate.fnRunTime(() => {this.exhaust.call(this)}) },
            doublePointer: () => { UseDate.fnRunTime(() => {this.doublePointer.call(this)}) },
            hashMap: () => { UseDate.fnRunTime(() => {this.hashMap.call(this)}) }
        }
        !lib[types] ? console.log(`no ${types} method`) : lib[types]();
        return this;
    }

}
