class AttendanceChecker 
{
    private record: string;

    constructor(record: string) 
    {
        this.record = record;
    }

    public isEligible(): boolean 
    {
        let absents: number = 0;
        let lateStreak: number = 0;

        for (let i = 0; i < this.record.length; i++) 
        {
            const char: string = this.record[i];

            if (char === 'A') 
            {
                absents++;
                if (absents >= 2) 
                {
                    return false;
                }
                lateStreak = 0; // reset streak
            } 
            else if (char === 'L') 
            {
                lateStreak++;
                if (lateStreak >= 3) 
                {
                    return false;
                }
            } 
            else 
            {
                // 'P' or any non-'L'/'A' then, reset late streak to 0
                lateStreak = 0;
            }
        }
        return true;
    }
}

const checker1 = new AttendanceChecker("PPALLP");
console.log(checker1.isEligible());                         // true

const checker2 = new AttendanceChecker("PPALLL");
console.log(checker2.isEligible());                         // false