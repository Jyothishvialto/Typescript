class PatternMatcher 
{

  findMatchingWords(words: string[], pattern: string): string[] 
  {
    let result: string[] = [];

    for (let i = 0; i < words.length; i++) 
    {
      let word = words[i];

      if (this.isMatch(word, pattern)) 
      {
        result.push(word);
      }
    }

    return result;
  }

  isMatch(word: string, pattern: string): boolean 
  {
    if (word.length !== pattern.length) 
    {
      return false;
    }

    let map1: { [key: string]: string } = {};
    let map2: { [key: string]: string } = {};

    for (let i = 0; i < word.length; i++) 
    {
      let wChar: string = word[i];
      let pChar: string = pattern[i];

      if (map1[pChar] === undefined) 
      {
        map1[pChar] = wChar;
      }

      if (map2[wChar] === undefined) 
      {
        map2[wChar] = pChar;
      }

      if (map1[pChar] !== wChar || map2[wChar] !== pChar) 
      {
        return false;
      }
    }

    return true;
  }
}

// Example usage
const words: string[] = ["abc", "deq", "mee", "aqq", "dkd", "ccc"];
const pattern1: string = "abb";

const matcher1 = new PatternMatcher();
const res: string[] = matcher1.findMatchingWords(words, pattern1);

console.log(res); // Output: ["mee", "aqq"]
