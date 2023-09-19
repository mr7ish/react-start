import { UseMath } from "@/utils";

export class TwoNumPlus {
    linkedListOne: number[]
    linkedListTwo: number[]

    constructor() {
        this.linkedListOne = this.fill(Array(UseMath.getRangeRandom(1, 10)).fill(1));
        this.linkedListTwo = this.fill(Array(UseMath.getRangeRandom(1, 10)).fill(1));
        // this.linkedListOne= [2,4,3];
        // this.linkedListTwo= [5,6,4];
        // this.linkedListOne= [0];
        // this.linkedListTwo= [0];
        // this.linkedListOne= [9,9,9,9,9,9,9];
        // this.linkedListTwo= [9,9,9,9];
    }

    fill(list: number[]) {
        return list.map((_val, index) => {
            if(list.length > 1 && index === list.length - 1) {
                return UseMath.getRangeRandom(1, 9);
            }
            return UseMath.getRangeRandom(0, 9);
        })
    }

    log() {
        console.log(`linkedListOne =>`, this.linkedListOne);
        console.log(`linkedListTwo =>`, this.linkedListTwo);
        console.log(`converted linkedListOne =>`, this.toNum(this.linkedListOne));
        console.log(`converted linkedListTwo =>`, this.toNum(this.linkedListTwo));
    }

    toNum(list: number[]) {
        return Number([...list].reverse().join(''));
    }

    sum() {
        const sum = this.toNum(this.linkedListOne) + this.toNum(this.linkedListTwo);
        console.log(sum);
        console.log(this.toArray(sum));
    }

    toArray(num: number) {
        return num.toString().split('').reverse();
    }
}