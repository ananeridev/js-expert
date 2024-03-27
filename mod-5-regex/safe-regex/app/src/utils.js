const safeRegex = require('safe-regex');

class InvalidRegexError extends Error {
    constructor(regex) {
        super(`Invalid regex: ${regex}`);
        this.name = 'InvalidRegexError';
    }
}   

const evaluateRegexSafety = (regex) => {
    if (!safeRegex(regex)) {
        throw new InvalidRegexError(regex);
    }
}   

module.exports = { evaluateRegexSafety, InvalidRegexError}