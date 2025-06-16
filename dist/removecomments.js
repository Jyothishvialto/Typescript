"use strict";
class CommentRemover {
    constructor(source) {
        this.source = source;
    }
    removeComments() {
        const result = [];
        let inBlock = false;
        let buffer = '';
        for (const line of this.source) {
            let i = 0;
            while (i < line.length) {
                if (!inBlock) {
                    if (line[i] === '/' && i + 1 < line.length && line[i + 1] === '/') {
                        // Line comment: skip the rest of the line
                        break;
                    }
                    else if (line[i] === '/' && i + 1 < line.length && line[i + 1] === '*') {
                        // Start of block comment
                        inBlock = true;
                        i += 2;
                    }
                    else {
                        buffer += line[i];
                        i++;
                    }
                }
                else {
                    // Inside block comment
                    if (line[i] === '*' && i + 1 < line.length && line[i + 1] === '/') {
                        inBlock = false;
                        i += 2;
                    }
                    else {
                        i++;
                    }
                }
            }
            // If we are not in a block and buffer has content, push it to result
            if (!inBlock && buffer.length > 0) {
                result.push(buffer);
                buffer = '';
            }
        }
        return result;
    }
}
const source = [
    "/*Test program */",
    "int main()",
    "{ ",
    "  // variable declaration ",
    "int a, b, c;",
    "/* This is a test",
    "   multiline  ",
    "   comment for ",
    "   testing */",
    "a = b + c;",
    "}"
];
const remove = new CommentRemover(source);
console.log(remove.removeComments()); // Output: [ 'int main()', '{ ', '  ', 'int a, b, c;', 'a = b + c;', '}' ]
