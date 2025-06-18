"use strict";
class SpaceInserter {
    constructor(s, spaces) {
        this.s = s;
        this.spaces = new Set(spaces);
    }
    insertSpaces() {
        let result = '';
        for (let i = 0; i < this.s.length; i++) {
            if (this.spaces.has(i)) {
                result += ' ';
            }
            result += this.s[i];
        }
        return result;
    }
}
const str = "LeetcodeHelpsMeLearn";
const spaces = [8, 13, 15];
const inserter = new SpaceInserter(str, spaces);
const modifiedString = inserter.insertSpaces();
console.log(modifiedString);
