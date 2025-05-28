class RepeatedSubstringFinder 
{
    private text: string;                             // stores the input text
    constructor(text: string) 
    {
    this.text = text;                                 // set the text when the object is created
    }
    private isRepeatedPattern(sub: string): boolean
    {
        const len: number = sub.length;                // get length of the substring
        if (len % 2 !== 0) return false;               // if length is not even, return false
        const half: number = len / 2;                  // divide length by 2
        return sub.slice(0, half) === sub.slice(half); // check if first half equals second half
        }
        public countRepeatedSubstrings(): number 
        {
            const seen: Set<string> = new Set();     // to store unique repeated substrings
            const n: number = this.text.length;      // total length of input text
            for (let i = 0; i < n; i++) {           // loop through start index of substrings
            for (let j = i + 2; j <= n; j += 2)     // loop through end index (even length only)
            {                                     
            const sub: string = this.text.substring(i, j);     // get the substring from i to j
            if (this.isRepeatedPattern(sub))                    // check if it's a repeated pattern
            {            
            seen.add(sub);                                      // add to set if it's valid
        }
      }
    }

    return seen.size;                 // return how many unique substrings found
  }
}

const Finder = new RepeatedSubstringFinder("abcabcabc"); 
const result3: number = Finder.countRepeatedSubstrings(); 
console.log(result3);  // Output: 3
