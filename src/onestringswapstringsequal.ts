class StringComparer
{    
    static AlmostEqual(s1: string, s2: string): boolean    // Static method to compare strings
    {
        if (s1 === s2) return true;                 // If both strings are already equal, return true

        let diff: number[] = [];                      // Array to hold indices where characters differ

        for (let i: number = 0; i < s1.length; i++)        // Loop through the characters of the strings
        {
            if (s1[i] !== s2[i])                          // If characters at index i are not equal
            {
                diff.push(i);                    // Store the index in the diff array
            }
        }

        if (diff.length !== 2) return false;    // If differences are not exactly 2, return false

        // Check if swapping s1[diff[0]] and s1[diff[1]] would match s2
        return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];    // Return true only if swap would make them equal
    }
}

console.log(StringComparer.AlmostEqual("bank", "kanb"));    // true → can be made equal with one swap
console.log(StringComparer.AlmostEqual("attack", "defend"));    // false → too many differences

