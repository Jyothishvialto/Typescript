class CamelCaseMatcher {
    constructor(queries, pattern) {
        this.queries = queries; // Initialize queries
        this.pattern = pattern; // Initialize pattern
    }
    isMatch(query, pattern) {
        let i = 0; // Pointer for pattern characters
        for (const char of query) { // Iterate through each character in query
            if (i < pattern.length && char === pattern[i]) {
                i++; // Match found, move to next character in pattern
            }
            else if (char >= 'A' && char <= 'Z') {
                return false; // Extra uppercase not in pattern → not a match
            }
        }
        return i === pattern.length; // Return true only if whole pattern was matched
    }
    matchQueries() {
        return this.queries.map(query => this.isMatch(query, this.pattern)); // Return true/false for each query
    }
}
// Example usage
const queries = ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"]; // Input queries
const pattern = "FB"; // Pattern to match
const matcher = new CamelCaseMatcher(queries, pattern); // Create instance of the class
const result2 = matcher.matchQueries(); // Get result array with true/false values
console.log(result2); // Output: [true, false, true, true, false]   // Print the results
