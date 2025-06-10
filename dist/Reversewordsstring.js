"use strict";
class WordReverse {
    constructor(inputString) {
        this.input = inputString;
    }
    reverseWords() {
        //Trim leading/trailing spaces
        let trimmed = this.input.trim();
        //Split the string by spaces
        let wordsArray = trimmed.split(' ');
        //Remove extra spaces (empty words)
        let Words = [];
        for (let word of wordsArray) {
            if (word !== '') {
                Words.push(word);
            }
        }
        //Reverse the array of valid words
        let reverseWords = Words.reverse();
        //Join with a single space and return
        return reverseWords.join(' ');
    }
}
const sentence = new WordReverse("  the   sky  is blue  ");
console.log(sentence.reverseWords());
