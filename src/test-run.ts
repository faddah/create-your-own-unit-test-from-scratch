const c = require('ansi-colors');

console.log(c.blue.italic(`is this working?`));

//the "expect" comparison
function expect(value: number): any {
	// this.value = value;
	const toEqual = (compareValue: number): boolean => {
		return value === compareValue;
	};
	return { toEqual };
}

// the "it" test
const it = (testString: string, callback: Function): void => {
	console.log(c.green(`${testString}: ${callback() ? c.bold(`PASSED.`) : c.red.bold(`FAILED`)}`));
};

it('adds two numbers', (): void => expect(1 + 1).toEqual(2));
