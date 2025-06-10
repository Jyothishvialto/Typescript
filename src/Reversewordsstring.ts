class WordReverse
{
  input: string;

  constructor(inputString: string) 
  {
    this.input = inputString;
  }
  reverseWords(): string 
  {
    //Trim leading/trailing spaces
    let trimmed: string = this.input.trim(); 

    //Split the string by spaces
    let wordsArray: string[] = trimmed.split(' '); 

    //Remove extra spaces (empty words)
    let Words: string[] = []; 
    for (let word of wordsArray) 
    {
      if (word !== '') 
      {
        Words.push(word); 
      }
    }
    //Reverse the array of valid words
    let reverseWords: string[] = Words.reverse(); 

    //Join with a single space and return
    return reverseWords.join(' ');
  }
}
const sentence: WordReverse = new WordReverse("  the   sky  is blue  ");
console.log(sentence.reverseWords());
