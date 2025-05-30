"use strict";
class DigitReconstructor {
    reconstruct(s) {
        const count = new Array(26).fill(0); // To count each character from 'a' to 'z'
        for (let char of s) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++; // Count each character in the input string
        }
        const digitCount = new Array(10).fill(0); // To count each digit 0-9
        digitCount[0] = count['z'.charCodeAt(0) - 'a'.charCodeAt(0)]; // Unique to "zero"
        digitCount[2] = count['w'.charCodeAt(0) - 'a'.charCodeAt(0)]; // Unique to "two"
        digitCount[4] = count['u'.charCodeAt(0) - 'a'.charCodeAt(0)]; // Unique to "four"
        digitCount[6] = count['x'.charCodeAt(0) - 'a'.charCodeAt(0)]; // Unique to "six"
        digitCount[8] = count['g'.charCodeAt(0) - 'a'.charCodeAt(0)]; // Unique to "eight"
        digitCount[3] = count['h'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCount[8]; // "three" shares 'h' with "eight"
        digitCount[5] = count['f'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCount[4]; // "five" shares 'f' with "four"
        digitCount[7] = count['s'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCount[6]; // "seven" shares 's' with "six"
        digitCount[1] = count['o'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCount[0] - digitCount[2] - digitCount[4]; // "one" shares 'o'
        digitCount[9] = count['i'.charCodeAt(0) - 'a'.charCodeAt(0)] - digitCount[5] - digitCount[6] - digitCount[8]; // "nine" shares 'i'
        let result = ''; // To store the final digit string in ascending order
        for (let i = 0; i <= 9; i++) {
            result += i.toString().repeat(digitCount[i]); // Append each digit based on its count
        }
        return result;
    }
}
// Example usage:
const s1 = "fviefuro"; // Input string
const reconstructor = new DigitReconstructor(); // Create object of class
console.log(reconstructor.reconstruct(s1)); // Output: "45"
