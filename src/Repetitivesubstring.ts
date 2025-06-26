//To find a Longest Semi-Repetitive Substring
function SemiRepetitiveSubstring(s: string): number
{
    let maxLen: number = 0;
    let start: number = 0;
    let duplicateCount: number = 0;

    for (let end: number = 1; end < s.length; end++)
    {
        if (s[end] === s[end - 1])
        {
            duplicateCount++;
        }
        while (duplicateCount > 1)
        {
            if (s[start] === s[start + 1])
            {
                duplicateCount--;
            }
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }
    return Math.max(maxLen, 1);
}
const string: string = "52233";
console.log(SemiRepetitiveSubstring(string));
