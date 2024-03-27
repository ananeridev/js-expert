const { describe, it } = require('mocha');
const { expect } = require('chai');
const { InvalidRegexError, evaluateRegexSafety } = require('../src/utils'); 

describe('Utils', () => {  

    it('#evaluateRegexSafety should throw an error if the regex is unsafe', () => {
        const unsafeRegex = /^([a-z|A-Z|0-9]+\s?)+$/;
        expect(() => evaluateRegexSafety(unsafeRegex)).to.throw(InvalidRegexError);
    })


    it('#evaluateRegexSafety should not throw an error if the regex is safe', () => {
        const safeRegex = /^([a-z])$/
        expect(() => evaluateRegexSafety(safeRegex)).to.not.throw();
    })
})