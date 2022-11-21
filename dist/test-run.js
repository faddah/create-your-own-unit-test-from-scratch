const c = require('ansi-colors');
console.log(c.blue.italic(`is this working?`));
//the "expect" comparison
const expect = (value) => {
    let testArray;
    Array.isArray(value) ? testArray = value.slice() : testArray = null;
    const toEqual = (compareValue) => {
        return value === compareValue;
    };
    const toHaveLength = (arrayLength) => {
        try {
            return testArray.length === arrayLength;
        }
        catch (err) {
            if (!testArray) {
                console.log(`Need an actual array: ${err}.`);
                return false;
            }
            else {
                console.log(`Something else f'd-up: ${err}.`);
                return false;
            }
        }
    };
    return {
        toEqual,
        toHaveLength
    };
};
// the "it" test
const it = (testString, callback) => {
    console.log(c.green(`${testString}: ${callback() ? c.bold(`PASSED.`) : c.red.bold(`FAILED!`)}`));
};
const arrTest = [1, 2, 3];
it('adds two numbers', () => expect(1 + 1).toEqual(2));
it('has the correct length', () => expect(arrTest).toHaveLength(3));
