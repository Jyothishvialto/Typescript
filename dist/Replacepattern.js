"use strict";
class PatternMatcher {
    findMatchingWords(words, pattern) {
        let result = [];
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (this.isMatch(word, pattern)) {
                result.push(word);
            }
        }
        return result;
    }
    isMatch(word, pattern) {
        if (word.length !== pattern.length) {
            return false;
        }
        let map1 = {};
        let map2 = {};
        for (let i = 0; i < word.length; i++) {
            let wChar = word[i];
            let pChar = pattern[i];
            if (map1[pChar] === undefined) {
                map1[pChar] = wChar;
            }
            if (map2[wChar] === undefined) {
                map2[wChar] = pChar;
            }
            if (map1[pChar] !== wChar || map2[wChar] !== pChar) {
                return false;
            }
        }
        return true;
    }
}
// Example usage
const words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
const pattern1 = "abb";
const matcher1 = new PatternMatcher();
const res = matcher1.findMatchingWords(words, pattern1);
console.log(res); // Output: ["mee", "aqq"]
