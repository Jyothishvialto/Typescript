class UncommonWordsFinder 
{
    s1: string;   
    s2: string;   

    constructor(s1: string, s2: string) 
    {
        this.s1 = s1;
        this.s2 = s2;
    }

    // Method to count word frequencies in a sentence
    getWordCounts(sentence: string): Record<string, number> 
    {
        const counts: Record<string, number> = {};  // Object with word counts
        const words: string[] = sentence.split(" ");

        for (let word of words) 
        {
            if (counts[word]) 
            {
                counts[word]++;
            } 
            else 
            {
                counts[word] = 1;
            }
        }

        return counts;
    }

    // Method to find uncommon words
    findUncommonWords(): string[] 
    {
        const count1: Record<string, number> = this.getWordCounts(this.s1);
        const count2: Record<string, number> = this.getWordCounts(this.s2);
        const result: string[] = [];

        // Check words in s1
        for (let word in count1) 
        {
            if (count1[word] === 1 && !count2[word]) 
            {
                result.push(word);
            }
        }

        // Check words in s2
        for (let word in count2) 
        {
            if (count2[word] === 1 && !count1[word]) 
            {
                result.push(word);
            }
        }

        return result;
    }
}

// Example usage
const finder1 = new UncommonWordsFinder("this apple is sweet", "this apple is sour");
console.log(finder1.findUncommonWords());   // Output: ["sweet", "sour"]
