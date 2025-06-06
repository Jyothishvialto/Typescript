class LongestWordFinder 
{
  private words: string[];

  constructor(words: string[]) 
  {
    this.words = words;
  }

  public findLongestWord(): string 
  {
    const wordSet: Set<string> = new Set(this.words);
    let longestWord: string = "";

    for (const word of this.words) 
    {
      if (this.canBuild(word, wordSet)) 
      {
        if (word.length > longestWord.length || (word.length === longestWord.length && word < longestWord)) 
        {
          longestWord = word;
        }
      }
    }
    return longestWord;
  }

  private canBuild(word: string, wordSet: Set<string>): boolean 
  {
    for (let i = 1; i < word.length; i++) // Checking if all prefixes of the word exist in the set
    {
      const prefix = word.substring(0, i);
      if (!wordSet.has(prefix)) 
      {
        return false;
      }
    }
    return true;
  }
}

const word: string[] = ["w", "wo", "wor", "worl", "world"];
const find = new LongestWordFinder(word);
console.log(find.findLongestWord());    