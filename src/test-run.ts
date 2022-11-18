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
		return testArray.length === arrayLength;
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
it('has the correct length', (): void => expect(arrTest).toHaveLength(3));
