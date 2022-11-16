# WRITE YOUR OWN UNIT TEST CHALLENGE

* First, run `$ npm install` in the directory you cloned this repository.
* Run this with Node.js with `$ node ./src/test-run`

Or, if you have the [nodemon package](https://www.npmjs.com/package/nodemon) — `$ nodemon ./src/test-run`

If you wish to see different results, change the values on the final line, such as —

`it('adds two numbers', (): void => expect(1 + 1).toEqual(0));`

or

`it('adds two numbers', (): void => expect(1).toEqual(2));`
