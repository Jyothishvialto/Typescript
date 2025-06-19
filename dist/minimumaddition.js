"use strict";
class ABCValidator {
    constructor(word) {
        this.word = word;
    }
    countInsertions() {
        let insertions = 0;
        let i = 0;
        while (i < this.word.length) {
            //Expecting 'a'
            if (this.word[i] !== 'a') {
                insertions++;
            }
            else {
                i++;
            }
            //Expecting 'b'
            if (i >= this.word.length || this.word[i] !== 'b') {
                insertions++;
            }
            else {
                i++;
            }
            //Expecting 'c'
            if (i >= this.word.length || this.word[i] !== 'c') {
                insertions++;
            }
            else {
                i++;
            }
        }
        return insertions;
    }
}
const input2 = "b";
const validator = new ABCValidator(input2);
const result1 = validator.countInsertions();
console.log("Minimum insertions needed:", result1);
