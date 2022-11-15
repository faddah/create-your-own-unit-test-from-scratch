const c = require('ansi-colors');
console.log(c.blue(`is this working?`));
//the "expect" comparison
const expect = (value) => {
    this.value = value;
    const toEqual = (compareValue) => {
        return !!(this.value === compareValue);
    };
    return { toEqual };
};
// the "it" test
const it = (testString, callback) => {
    console.log(c.green(`${testString}: ${callback() ? `PASSED.` : c.red(`FAILED!`)}`));
};
it('adds two numbers', () => expect(1 + 1).toEqual(2));
