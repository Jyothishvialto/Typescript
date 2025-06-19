class ABCValidator
{
  word: string;

  constructor(word: string) 
  {
    this.word = word;
  }
  countInsertions(): number 
  {
    let insertions: number = 0;
    let i: number = 0; 

    while (i < this.word.length) 
    {
      //Expecting 'a'
      if (this.word[i] !== 'a') 
      {
        insertions++;
      } 
      else 
      {
        i++;
      }
      //Expecting 'b'
      if (i >= this.word.length || this.word[i] !== 'b') 
      {
        insertions++;
      } 
      else 
      {
        i++;
      }
      //Expecting 'c'
      if (i >= this.word.length || this.word[i] !== 'c') 
      {
        insertions++;
      } 
      else 
      {
        i++;
      }
    }

    return insertions;
  }
}

const input2: string = "b";
const validator = new ABCValidator(input2);
const result1: number = validator.countInsertions();
console.log("Minimum insertions needed:", result1); 
