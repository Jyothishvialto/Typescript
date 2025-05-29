"use strict";
function maxRepOpt1(text) {
    const positions = {}; // store positions of each character
    // Step 1: Collect indexes of each character
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (!positions[ch]) {
            positions[ch] = [];
        }
        positions[ch].push(i); // add index to that character's list
    }
    let maxLen = 0; // to store maximum length found
    // Step 2: Check for each character group
    for (const ch in positions) {
        const indexes = positions[ch]; // all positions of the character
        let left = 0;
        let right = 0;
        let usedSwap = false; // flag to track swap usage
        while (right < indexes.length) {
            // If there is a gap (more than 1 index apart)
            if (right > left && indexes[right] - indexes[right - 1] > 1) {
                if (usedSwap) {
                    left++; // move left pointer if already swapped
                }
                else {
                    usedSwap = true; // allow one gap
                }
            }
            const windowLen = indexes[right] - indexes[left] + 1; // window size
            const total = indexes.length;
            const addOne = total > (right - left + 1) ? 1 : 0; // extra if we can swap one more
            maxLen = Math.max(maxLen, windowLen + addOne); // update result
            right++; // expand window
        }
    }
    return maxLen; // final answer
}
// Example usage
const text = "ababa";
const result4 = maxRepOpt1(text);
console.log(result4); // Output: 3
