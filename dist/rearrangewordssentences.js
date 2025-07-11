"use strict";
class SentenceRearranger {
    constructor(text) {
        this.text = text; // Store the input text
    }
    // Method to rearrange the words by length
    rearrangeWords() {
        // Convert the first letter to lowercase
        let modifiedText = this.text[0].toLowerCase() + this.text.slice(1);
        // Split the text into individual words
        let words = modifiedText.split(" ");
        // Store each word with its original index for stable sorting
        let wordObjects = words.map((word, index) => {
            return { word, index };
        });
        // Sort words by length (and by original order if lengths match)
        wordObjects.sort((a, b) => {
            if (a.word.length !== b.word.length) {
                return a.word.length - b.word.length;
            }
            else {
                return a.index - b.index;
            }
        });
        // Extract sorted words from the object array
        let sortedWords = wordObjects.map(obj => obj.word);
        let firstWord = sortedWords[0]; // Get the first word
        let capitalized = firstWord.charAt(0).toUpperCase() + firstWord.slice(1); // Capitalize first letter
        sortedWords[0] = capitalized; // Assign back to the array
        // Join words into a sentence
        let finalSentence = sortedWords.join(" ");
        return finalSentence;
    }
}
const input1 = "Leetcode is cool";
const rearranger = new SentenceRearranger(input1);
console.log(rearranger.rearrangeWords()); // Output: "Is cool Leetcode"
