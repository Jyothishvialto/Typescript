"use strict";
class IPAddressGenerator {
    constructor(input) {
        this.input = input;
        this.results = [];
    }
    generate() {
        this.findIPs([], 0);
        return this.results;
    }
    findIPs(parts, index) {
        if (parts.length === 4 && index === this.input.length) {
            this.results.push(parts.join('.'));
            return;
        }
        if (parts.length === 4) {
            return;
        }
        for (let len = 1; len <= 3; len++) {
            if (index + len > this.input.length) {
                break;
            }
            const part = this.input.slice(index, index + len);
            if (part.length > 1 && part.startsWith('0')) {
                continue;
            }
            if (Number(part) > 255) {
                continue;
            }
            parts.push(part);
            this.findIPs(parts, index + len);
            parts.pop();
        }
    }
}
// Example usage
const generator = new IPAddressGenerator("25525511135");
const validIPs = generator.generate();
console.log(validIPs); // ["255.255.11.135", "255.255.111.35"]
