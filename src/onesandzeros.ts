class OnesAndZeroes {
  strs: string[];                        // List of binary strings
  m: number;                             // Maximum number of 0s allowed
  n: number;                             // Maximum number of 1s allowed

  constructor(strs: string[], m: number, n: number) {
    this.strs = strs;                    // Store input strings
    this.m = m;                          // Max 0s
    this.n = n;                          // Max 1s
  }

  findMax(): number {
    const subsetCount = Array(this.m + 1)         // Create 2D array for 0s
      .fill(0)
      .map(() => Array(this.n + 1).fill(0));      // And for 1s

    for (const str of this.strs) {                // Loop over each string
      let zero = 0, one = 0;

      for (const ch of str) {                     // Count 0s and 1s in the string
        if (ch === '0') zero++;
        else if (ch === '1') one++;
      }

      for (let i = this.m; i >= zero; i--) {      // Loop from m down to zero count
        for (let j = this.n; j >= one; j--) {     // Loop from n down to one count
          subsetCount[i][j] = Math.max(           // Choose the best (max subset)
            subsetCount[i][j],                    // Without current string
            1 + subsetCount[i - zero][j - one]    // With current string
          );
        }
      }
    }

    return subsetCount[this.m][this.n];           // Return the result
  }
}

// ========== Example Usage ==========

const strs = ["10", "0001", "111001", "1", "0"];     // Input strings
const m = 5;                                          // Max 0s
const n = 3;                                          // Max 1s

const obj = new OnesAndZeroes(strs, m, n);            // Create object
const result = obj.findMax();                         // Call method

console.log("Largest subset size:", result);          // Show result
