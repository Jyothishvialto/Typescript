"use strict";
//To find a Longest Semi-Repetitive Substring
function SemiRepetitiveSubstring(s) {
    let maxLen = 0;
    let start = 0;
    let duplicateCount = 0;
    for (let end = 1; end < s.length; end++) {
        if (s[end] === s[end - 1]) {
            duplicateCount++;
        }
        while (duplicateCount > 1) {
            if (s[start] === s[start + 1]) {
                duplicateCount--;
            }
            start++;
        }
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return Math.max(maxLen, 1);
}
const string = "52233";
console.log(SemiRepetitiveSubstring(string));
