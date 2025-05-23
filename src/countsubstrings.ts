function countKFrequencySubstrings(s: string, k: number): number
{
    let total = 0;                                               // To store total number of valid substrings

    for (let start = 0; start < s.length; start++)               // Loop over each starting index
        { 
            const freq: { [key: string]: number } = {};             // Frequency map for current substring

            let maxFreq = 0;                                       // Track max frequency of any char in current substring
            for (let end = start; end < s.length; end++)          // Loop to extend substring
            {
                const char = s[end];                              // Get current character
                freq[char] = (freq[char] || 0) + 1;               // Update frequency map
                maxFreq = Math.max(maxFreq, freq[char]);          // Update max frequency

                if (maxFreq >= k)                                 // If any character appears at least k times
                {
                    total++;                                     // Count this substring
                }
            }
        }
        return total;                                              // Return total valid substrings
        }
        const s = "abacb";                                        // Input string
        const k = 2;                                              // Frequency condition
        const output = countKFrequencySubstrings(s, k);           // Call the function
        console.log("Total valid substrings:", output);            // Output: 4
