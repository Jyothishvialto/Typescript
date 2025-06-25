"use strict";
class SpamDetector {
    constructor(message, bannedWords) {
        this.message = message;
        this.bannedSet = new Set(bannedWords);
    }
    isSpam() {
        let count = 0;
        for (let word of this.message) {
            if (this.bannedSet.has(word)) {
                count++;
                if (count >= 2) {
                    return true;
                }
            }
        }
        return false;
    }
}
const message = ["hello", "world", "leetcode"];
const bannedWords = ["world", "hello"];
const detector = new SpamDetector(message, bannedWords);
console.log(detector.isSpam()); // Output: true
