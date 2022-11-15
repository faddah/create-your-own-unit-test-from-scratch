const c = require('ansi-colors');

console.log(c.blue(`is this working?`));

//the "expect" comparison
const expect = (value: number): any => {
	this.value = value;
	const toEqual = (compareValue: number): boolean => {
		return !!(this.value === compareValue);
	}
	return { toEqual };
}

// the "it" test
const it = (testString: string, callback: Function): void => {
	console.log(c.green(`${testString}: ${callback() ? `PASSED.` : c.red(`FAILED!`)}`));
};

it('adds two numbers', (): void => expect(1 + 1).toEqual(2));