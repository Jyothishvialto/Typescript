"use strict";
class StringCompressor {
    constructor(chars) {
        this.chars = chars;
    }
    compress() {
        let index = 0; // Position to write into
        let i = 0; // Current read position
        while (i < this.chars.length) {
            let char = this.chars[i];
            let count = 0;
            // Count how many times the character repeats
            while (i < this.chars.length && this.chars[i] === char) {
                i++;
                count++;
            }
            // Write the character
            this.chars[index++] = char;
            // Write the count if more than 1
            if (count > 1) {
                const countStr = count.toString();
                for (let digit of countStr) {
                    this.chars[index++] = digit;
                }
            }
        }
        return index; // New compressed length
    }
}
const letters = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
const compressor = new StringCompressor(letters);
const result5 = compressor.compress();
console.log("Total after compression:", result5);
console.log("Compressed letters:", letters.slice(0, result5));
