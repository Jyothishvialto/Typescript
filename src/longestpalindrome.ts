class PalindromeHelper {
  
  // Method to check if a given string is a palindrome
  isPalindrome(str: string): boolean {                    // Takes a string, returns true or false
    let left: number = 0;                                 // Pointer from the start of the string
    let right: number = str.length - 1;                   // Pointer from the end of the string

    while (left < right) {                                // Loop until both pointers meet
      if (str[left] !== str[right]) {                     // If characters mismatch
        return false;                                     // It's not a palindrome
      }
      left++;                                             // Move left pointer forward
      right--;                                            // Move right pointer backward
    }

    return true;                                          // It's a palindrome
  }

  // Method to find the longest palindromic substring
  findLongestPalindrome(s: string): string {              // Takes a string and returns the longest palindrome
    let longest: string = '';                             // Store the longest palindrome found

    for (let i = 0; i < s.length; i++) {                  // Outer loop - start index
      for (let j = i + 1; j <= s.length; j++) {           // Inner loop - end index
        const substring: string = s.slice(i, j);          // Get substring from i to j

        // If it's a palindrome and longer than current longest
        if (this.isPalindrome(substring) && substring.length > longest.length) {
          longest = substring;                            // Update longest
        }
      }
    }

    return longest;                                       // Return result
  }
}

const helper = new PalindromeHelper();                    // Create an object of the class
const inputString: string = "babad";                      // Sample input
const result: string = helper.findLongestPalindrome(inputString);  // Call method
console.log("Longest Palindromic Substring:", result);    // Print result
