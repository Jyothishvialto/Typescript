class CamelCaseMatcher {
  private queries: string[];                   // Array of query strings
  private pattern: string;                     // Pattern to match

  constructor(queries: string[], pattern: string) {
    this.queries = queries;                    // Initialize queries
    this.pattern = pattern;                    // Initialize pattern
  }

  private isMatch(query: string, pattern: string): boolean {
    let i = 0;                                  // Pointer for pattern characters
    for (const char of query) {                // Iterate through each character in query
      if (i < pattern.length && char === pattern[i]) {
        i++;                                    // Match found, move to next character in pattern
      } else if (char >= 'A' && char <= 'Z') {
        return false;                           // Extra uppercase not in pattern → not a match
      }
    }
    return i === pattern.length;                // Return true only if whole pattern was matched
  }

  public matchQueries(): boolean[] {
    return this.queries.map(query => this.isMatch(query, this.pattern)); // Return true/false for each query
  }
}

// Example usage
const queries: string[] = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"]; // Input queries
const pattern: string = "FB";                                                                  // Pattern to match

const matcher = new CamelCaseMatcher(queries, pattern);    // Create instance of the class
const result2: boolean[] = matcher.matchQueries();          // Get result array with true/false values

console.log(result); // Output: [true, false, true, true, false]   // Print the results
