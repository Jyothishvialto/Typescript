class LexSmallestString 
{
  n: number;                                              // length of string needed
  k: number;                                              // total numeric value needed

  constructor(n: number, k: number) 
  {
    this.n = n;                                            // assign length
    this.k = k;                                            // assign total numeric value
  }

  getSmallestStr(): string 
  {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';    // alphabet string to pick chars
    const result: string[] = [];                               // to store characters
    let remainingLength: number = this.n;                      // number of chars left to fill
    let remainingValue: number = this.k;                       // numeric value left to assign

    while (remainingLength > 0) 
    {
      let maxCharValue: number = remainingValue - (remainingLength - 1);  // max value current char can have

      if (maxCharValue > 26) 
      {
        maxCharValue = 26;                              // limit max char value to 26 ('z')
      }

      const char: string = alphabet[maxCharValue - 1];  // get character from alphabet string

      result.push(char);                                // add char to result array

      remainingValue -= maxCharValue;                   // decrease remaining value
      remainingLength--;                                // decrease remaining length
    }

    return result.reverse().join('');                   // reverse array and convert to string
  }
}

// Example usage
const object = new LexSmallestString(3, 27);              
console.log(object.getSmallestStr());    // Output: "aay"
