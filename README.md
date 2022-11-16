# WRITE YOUR OWN UNIT TEST CHALLENGE

* First, run `$ npm install` in the directory you cloned this repository.
* Then, to make changes to code and see result, in another Terminal/Command line tab, run in the directory where you cloned this repository: `$ tsc -w`.
* Run this with Node.js with `$ node ./dist/test-run.js`
* Or, if you have the [nodemon package](https://www.npmjs.com/package/nodemon) — `$ nodemon ./dist/test-run.js`

If you wish to see different results, change the values on the final line, such as —

`it('adds two numbers', (): void => expect(1 + 1).toEqual(0));`

or

`it('adds two numbers', (): void => expect(1).toEqual(2));`
