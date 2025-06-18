class SpaceInserter
{
  s: string;
  spaces: Set<number>;

  constructor(s: string, spaces: number[])
  {
    this.s = s;
    this.spaces = new Set<number>(spaces);
  }

  insertSpaces(): string
  {
    let result: string = '';

    for (let i = 0; i < this.s.length; i++)
    {
      if (this.spaces.has(i))
      {
        result += ' ';
      }
      result += this.s[i];
    }

    return result;
  }
}

const str = "LeetcodeHelpsMeLearn"; 
const spaces: number[] = [8, 13, 15];

const inserter = new SpaceInserter(str, spaces); 
const modifiedString = inserter.insertSpaces();
console.log(modifiedString);  
