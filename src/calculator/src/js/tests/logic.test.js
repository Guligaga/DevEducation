const calcSum = require('../logic.js').calcSum;
const calcSub = require('../logic.js').calcSub;
const calcMulti = require('../logic.js').calcMulti;
const calcDiv = require('../logic.js').calcDiv;

describe('Sum test', () => {
    it('Pass 102 and 3, expect 105', () => {
        assert.equal(calcSum(102, 3), 105);
    })
})

describe('Substraction test', () => {
    it('Pass 0 and 3, expect -3', () => {
        assert.equal(calcSub(0, 3), -3);
    })
})

describe('Multiply test', () => {
    it('Pass 10 and 3, expect 30', () => {
        assert.equal(calcMulti(10, 3), 30);
    })
})

describe('Division test', () => {
    it('Pass 12 and 8, expect 1.5', () => {
        assert.equal(calcDiv(12, 8), 1.5);
    });
    it('Pass 123 and 0, expect Infinity', () => {
        assert.equal(calcDiv(123, 0), Infinity);
    })
})