class NumberChecker
{
  input: string;

  constructor(input: string)
  {
    this.input = input;
  }

  isAdditive(): boolean
  {
    const n: number = this.input.length;

    for (let i = 1; i < n; i++)
    {
      for (let j = i + 1; j < n; j++)
      {
        const first: string = this.input.slice(0, i);
        const second: string = this.input.slice(i, j);

        if ((first.length > 1 && first[0] === '0') || (second.length > 1 && second[0] === '0'))
        {
          continue;
        }

        let num1: number = Number(first);
        let num2: number = Number(second);
        let nextIndex: number = j;

        while (nextIndex < n)
        {
          const sum: number = num1 + num2;
          const sumStr: string = sum.toString();

          if (!this.input.startsWith(sumStr, nextIndex))
          {
            break;
          }

          nextIndex += sumStr.length;
          num1 = num2;
          num2 = sum;
        }

        if (nextIndex === n)
        {
          return true;
        }
      }
    }

    return false;
  }
}

// ✅ Example usage
const input3: string = "112358";
const checker: NumberChecker = new NumberChecker(input3);
console.log(checker.isAdditive()); // true
