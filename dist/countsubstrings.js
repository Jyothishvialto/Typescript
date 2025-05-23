"use strict";
// function countKFrequencySubstrings(s: string, k: number): number 
// {
//     let count = 0;    
//     // let result1=0;                                      // To store the total number of valid substrings
//     for (let i = 0; i < s.length; i++)                        // Loop over each starting index of substring
//         { 
//             const freqMap: { [key: string]: number } = {};    // Map to store character frequencies
//             for (let j = i; j < s.length; j++)                 // Loop to extend the substring till the end
//                 {
//                     const char = s[j];                         // Current character in substring
//                     freqMap[char] = (freqMap[char] || 0) + 1;  // Increment character frequency
//                     for (const key in freqMap)                 // Check all characters in the map
//                 { 
//                     if (freqMap[key] >= k)                     // If any character appears at least k times
//                     { 
//                         count++;                               // It's a valid substring, increase the count
//                         break;                                // Break inner loop since we already found a valid substring
//                         }
//                     }
//                 }
//             }
//             return count;                                     // Return total valid substrings
//             }
//             const s = "abacb";   // Input string
//             const k = 2;         // Frequency to check
//             const result1 = countKFrequencySubstrings(s, k); // Call the function
//             console.log("Total valid substrings:", result1); // Output the result (Expected: 4)
function countKFrequencySubstrings(s, k) {
    let total = 0; // To store total number of valid substrings
    for (let start = 0; start < s.length; start++) { // Loop over each starting index
        const freq = {}; // Frequency map for current substring
        let maxFreq = 0; // Track max frequency of any char in current substring
        for (let end = start; end < s.length; end++) { // Loop to extend substring
            const char = s[end]; // Get current character
            freq[char] = (freq[char] || 0) + 1; // Update frequency map
            maxFreq = Math.max(maxFreq, freq[char]); // Update max frequency
            if (maxFreq >= k) { // If any character appears at least k times
                total++; // Count this substring
            }
        }
    }
    return total; // Return total valid substrings
}
// Test the function
const s = "abacb"; // Input string
const k = 2; // Frequency condition
const output = countKFrequencySubstrings(s, k); // Call the function
console.log("Total valid substrings:", output); // Output: 4
