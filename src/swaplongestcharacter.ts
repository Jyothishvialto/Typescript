function maxRepOpt1(text: string): number 
{
  const positions: Record<string, number[]> = {}; // store positions of each character

  // Step 1: Collect indexes of each character
  for (let i = 0; i < text.length; i++) 
  {
    const ch: string = text[i];
    if (!positions[ch]) 
    {
      positions[ch] = [];
    }
    positions[ch].push(i);                             // add index to that character's list
  }

  let maxLen: number = 0;                              // to store maximum length found

  // Step 2: Check for each character group
  for (const ch in positions) 
  {
    const indexes: number[] = positions[ch];           // all positions of the character
    let left: number = 0;
    let right: number = 0;
    let usedSwap: boolean = false;                     // flag to track swap usage

    while (right < indexes.length) 
    {
      // If there is a gap (more than 1 index apart)
      if (right > left && indexes[right] - indexes[right - 1] > 1) 
      {
        if (usedSwap) 
        {
          left++;                    // move left pointer if already swapped
        } 
        else 
        {
          usedSwap = true;           // allow one gap
        }
      }

      const windowLen: number = indexes[right] - indexes[left] + 1; // window size
      const total: number = indexes.length;
      const addOne: number = total > (right - left + 1) ? 1 : 0; // extra if we can swap one more

      maxLen = Math.max(maxLen, windowLen + addOne);          // update result
      right++;         // expand window
    }
  }

  return maxLen;       // final answer
}

const text: string = "ababa";
const result4: number = maxRepOpt1(text);
console.log(result4); // Output: 3
