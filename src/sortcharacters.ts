class Frequencycharacter {                              // Define a class to sort characters by frequency
  s: string;                                            // Declare type for input string

  constructor(input: string) {                          // Constructor accepts input string parameter
    this.s = input;                                     // Store the input string
  }

  sortCharactersByFrequency(): void {                   // Method to sort characters by frequency, returns nothing
    let freq: { [key: string]: number } = {};          // Object to store character frequency counts

    for (let i = 0; i < this.s.length; i++) {           // Loop through each character in the input string
      let ch: string = this.s[i];                       // Get the current character
      if (freq[ch] === undefined) {                     // If character is not already in freq object
        freq[ch] = 1;                                   // Initialize with count 1
      } else {
        freq[ch]++;                                     // If already present, increment its count
      }
    }

    let arr: string[] = [];                              // Array to store characters repeated by their frequency

    for (let ch in freq) {                              // Loop through each key (character) in freq object
      arr.push(ch.repeat(freq[ch]));                    // Repeat character as per frequency and add to array
    }

    arr.sort((a, b) => b.length - a.length);            // Sort array in descending order of frequency

    let result: string = arr.join('');                  // Join all elements of array into a single string

    console.log("Sorted string by frequency:", result); // Output the final sorted string
  }
}

// Example usage:
const input: string = "tree";                           // Sample input string
const sorter = new Frequencycharacter(input);          // Create an instance of Frequencycharacter with input
sorter.sortCharactersByFrequency();                     // Call the method to process and print the result
