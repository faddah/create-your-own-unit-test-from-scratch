const c = require('ansi-colors');

console.log(c.blue.italic(`is this working?`));

//the "expect" comparison
const expect = (value: number | any[]): any => {
	let testArray: any[];
	Array.isArray(value) ? testArray = value.slice() : testArray = null;
	const toEqual = (compareValue: number): boolean => {
		return value === compareValue;
	};
	const toHaveLength = (arrayLength: number): boolean => {
		try {
			return testArray.length === arrayLength;
		} catch (err) {
			if (!testArray) {
				console.log(`Need an actual array: ${err}.`);
				return false;
			} else {
				console.log(`Something else f'd-up: ${err}.`);
				return false;
			}
		}
	}
	return {
		toEqual,
		toHaveLength
	};
}

// the "it" test
const it = (testString: string, callback: Function): void => {
	console.log(c.green(`${testString}: ${callback() ? c.bold(`PASSED.`) : c.red.bold(`FAILED!`)}`));
};

const arrTest: any[] = [1, 2, 3];

it('adds two numbers', (): void => expect(1 + 1).toEqual(2));
it('has the correct length', (): void => expect([1, 2, 3], "yeah, whatever").toHaveLength(3));
