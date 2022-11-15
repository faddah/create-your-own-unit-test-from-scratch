const c = require('ansi-colors');
console.log(c.blue.italic(`is this working?`));
//the "expect" comparison
function expect(value) {
    // this.value = value;
    const toEqual = (compareValue) => {
        return value === compareValue;
    };
    return { toEqual };
}
// the "it" test
const it = (testString, callback) => {
    console.log(c.green(`${testString}: ${callback() ? c.bold(`PASSED.`) : c.red.bold(`FAILED`)}`));
};
it('adds two numbers', () => expect(1 + 1).toEqual(2));
