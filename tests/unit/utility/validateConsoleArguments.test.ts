import {validateConsoleArguments} from '../../../src/utility/validateConsoleArguments'

describe('validateConsoleArguments', () => {

	it('should throw an error when args does not have a length of 2', () => {
		const args = ['1']
		const expectedError = Error(`You must provide two arguments the --muscle flag and a value`)
		expect(() => validateConsoleArguments(args)).toThrow(expectedError)
	})

	it('should throw an error when args does not include --muscle flag', () => {
		const args = ['1', '2']
		const expectedError = Error(`You must provide two arguments the --muscle flag and a value`)
		expect(() => validateConsoleArguments(args)).toThrow(expectedError)
	})

	it('should not throw an error when args does not include --muscle flag', () => {
		const args = ['--muscle', '2']
		const expectedError = Error(`You must provide two arguments the --muscle flag and a value`)
		expect(() => validateConsoleArguments(args)).not.toThrow(expectedError)
	})

})
