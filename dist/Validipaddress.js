"use strict";
class IPAddressValidator {
    constructor(queryIP) {
        this.queryIP = queryIP; // Assign input IP to the class property
    }
    validateIPAddress() {
        if (this.isValidIPv4()) {
            return "IPv4"; // If valid IPv4, return IPv4
        }
        else if (this.isValidIPv6()) {
            return "IPv6"; // If valid IPv6, return IPv6
        }
        else {
            return "Neither"; // If neither, return Neither
        }
    }
    isValidIPv4() {
        const parts = this.queryIP.split('.'); // Split IP by dot
        if (parts.length !== 4) // Must be exactly 4 parts
            return false;
        for (let part of parts) {
            if (!/^\d+$/.test(part)) // RegEx : test() - tests whether it is all digits
                return false;
            if (part.length > 1 && part[0] === '0') // No leading zeros
                return false;
            const num = Number(part); // Convert part to number
            if (num < 0 || num > 255) // Must be between 0 and 255
                return false;
        }
        return true; // All checks passed => valid IPv4
    }
    isValidIPv6() {
        const parts = this.queryIP.split(':'); // Split IP by colon
        if (parts.length !== 8) // Must be exactly 8 parts
            return false;
        const hexRegex = /^[0-9a-fA-F]{1,4}$/; // hexRegex: each part must be 1 to 4 hex digits
        for (let part of parts) {
            if (!hexRegex.test(part)) // Part does not match hexRegex
                return false;
        }
        return true; // All checks passed => valid IPv6
    }
}
// Example usage:
const ip1 = new IPAddressValidator("192.168.1.1");
console.log(ip1.validateIPAddress()); // "IPv4"
const ip2 = new IPAddressValidator("2001:db8:85a3:0:0:8A2E:0370:7334");
console.log(ip2.validateIPAddress()); // "IPv6"
const ip3 = new IPAddressValidator("192.168.01.1");
console.log(ip3.validateIPAddress()); // "Neither"
