// Define the class
class ConcatenatedWordsSimple {
  words: string[];

  // Accept input as a constructor parameter
  constructor(input: string) {
    this.words = input.split(",").map((word: string) => word.trim());
  }

  // Function to check if a word can be formed by concatenating other words
  canForm(word: string, wordSet: Set<string>): boolean {
    if (word === "") return false;

    for (let i = 1; i < word.length; i++) {
      const firstPart = word.substring(0, i);
      const secondPart = word.substring(i);

      if (
        wordSet.has(firstPart) &&
        (wordSet.has(secondPart) || this.canForm(secondPart, wordSet))
      ) {
        return true;
      }
    }

    return false;
  }

  // Function to find and display concatenated words
  findConcatenatedWords(): void {
    const result: string[] = [];
    const wordSet: Set<string> = new Set(this.words);

    for (const word of this.words) {
      wordSet.delete(word);

      if (this.canForm(word, wordSet)) {
        result.push(word);
      }

      wordSet.add(word);
    }

    console.log("Concatenated Words are:", result);
  }
}

// Sample input string (replace with your desired input)
const inputString: string = "cat,dog,catdog,rat,ratcatdog";

// Create object and run the method
const finder = new ConcatenatedWordsSimple(inputString);
finder.findConcatenatedWords();
