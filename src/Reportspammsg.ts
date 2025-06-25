class SpamDetector
{
    private message: string[];
    private bannedSet: Set<string>;

    constructor(message: string[], bannedWords: string[])
    {
        this.message = message;
        this.bannedSet = new Set(bannedWords);
    }

    public isSpam(): boolean
    {
        let count = 0;

        for (let word of this.message)
        {
            if (this.bannedSet.has(word))
            {
                count++;
                if (count >= 2)
                {
                    return true;
                }
            }
        }

        return false;
    }
}
const message: string[] = ["hello", "world", "leetcode"];
const bannedWords: string[] = ["world", "hello"];

const detector = new SpamDetector(message, bannedWords);
console.log(detector.isSpam()); // Output: true
