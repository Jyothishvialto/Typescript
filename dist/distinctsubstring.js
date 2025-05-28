"use strict";
class RepeatedSubstringFinder {
    constructor(text) {
        this.text = text; // set the text when the object is created
    }
    isRepeatedPattern(sub) {
        const len = sub.length; // get length of the substring
        if (len % 2 !== 0)
            return false; // if length is not even, return false
        const half = len / 2; // divide length by 2
        return sub.slice(0, half) === sub.slice(half); // check if first half equals second half
    }
    countRepeatedSubstrings() {
        const seen = new Set(); // to store unique repeated substrings
        const n = this.text.length; // total length of input text
        for (let i = 0; i < n; i++) { // loop through start index of substrings
            for (let j = i + 2; j <= n; j += 2) // loop through end index (even length only)
             {
                const sub = this.text.substring(i, j); // get the substring from i to j
                if (this.isRepeatedPattern(sub)) // check if it's a repeated pattern
                 {
                    seen.add(sub); // add to set if it's valid
                }
            }
        }
        return seen.size; // return how many unique substrings found
    }
}
const Finder = new RepeatedSubstringFinder("abcabcabc");
const result3 = Finder.countRepeatedSubstrings();
console.log(result3); // Output: 3
