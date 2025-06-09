"use strict";
class ParenthesesRemover {
    // Main function with type annotations
    removeInvalidParentheses(s) {
        let result = [];
        let maxLen = 0;
        // Helper function to check if a string is valid
        const isValid = (str) => {
            let count = 0;
            for (let char of str) {
                if (char === '(')
                    count++;
                else if (char === ')')
                    count--;
                if (count < 0)
                    return false;
            }
            return count === 0;
        };
        // DFS function with proper type annotations
        const dfs = (str, start, removed, visited) => {
            if (visited.has(str))
                return;
            visited.add(str);
            if (isValid(str)) {
                if (str.length > maxLen) {
                    result = [str];
                    maxLen = str.length;
                }
                else if (str.length === maxLen) {
                    result.push(str);
                }
                return;
            }
            for (let i = start; i < str.length; i++) {
                if (str[i] !== '(' && str[i] !== ')')
                    continue;
                const newStr = str.slice(0, i) + str.slice(i + 1);
                dfs(newStr, i, removed + 1, visited);
            }
        };
        dfs(s, 0, 0, new Set());
        return result.length > 0 ? result : [""];
    }
}
const remover = new ParenthesesRemover();
console.log(remover.removeInvalidParentheses("()())()")); // output =  ["(())()", "()()()"]
console.log(remover.removeInvalidParentheses("(a)())()")); // output = ["(a())()", "(a)()()"]
console.log(remover.removeInvalidParentheses(")(")); // output = [""]
