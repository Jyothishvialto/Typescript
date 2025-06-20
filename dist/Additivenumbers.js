"use strict";
class NumberChecker {
    constructor(input) {
        this.input = input;
    }
    isAdditive() {
        const n = this.input.length;
        for (let i = 1; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const first = this.input.slice(0, i);
                const second = this.input.slice(i, j);
                if ((first.length > 1 && first[0] === '0') || (second.length > 1 && second[0] === '0')) {
                    continue;
                }
                let num1 = Number(first);
                let num2 = Number(second);
                let nextIndex = j;
                while (nextIndex < n) {
                    const sum = num1 + num2;
                    const sumStr = sum.toString();
                    if (!this.input.startsWith(sumStr, nextIndex)) {
                        break;
                    }
                    nextIndex += sumStr.length;
                    num1 = num2;
                    num2 = sum;
                }
                if (nextIndex === n) {
                    return true;
                }
            }
        }
        return false;
    }
}
// ✅ Example usage
const input3 = "112358";
const checker = new NumberChecker(input3);
console.log(checker.isAdditive()); // true
