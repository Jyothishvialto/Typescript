"use strict";
class UncommonWordsFinder {
    constructor(s1, s2) {
        this.s1 = s1;
        this.s2 = s2;
    }
    // Method to count word frequencies in a sentence
    getWordCounts(sentence) {
        const counts = {}; // Object with word counts
        const words = sentence.split(" ");
        for (let word of words) {
            if (counts[word]) {
                counts[word]++;
            }
            else {
                counts[word] = 1;
            }
        }
        return counts;
    }
    // Method to find uncommon words
    findUncommonWords() {
        const count1 = this.getWordCounts(this.s1);
        const count2 = this.getWordCounts(this.s2);
        const result = [];
        // Check words in s1
        for (let word in count1) {
            if (count1[word] === 1 && !count2[word]) {
                result.push(word);
            }
        }
        // Check words in s2
        for (let word in count2) {
            if (count2[word] === 1 && !count1[word]) {
                result.push(word);
            }
        }
        return result;
    }
}
// Example usage
const finder1 = new UncommonWordsFinder("this apple is sweet", "this apple is sour");
console.log(finder1.findUncommonWords()); // Output: ["sweet", "sour"]
