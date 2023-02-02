import axios from 'axios'

jest.mock('axios')

describe('index.ts', () => {
	const mockAxios = axios as jest.MockedFunction<typeof axios>

	beforeEach(() => {
		process.argv = []
	})


	it('should throw an error if no arguments are passed', async () => {
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs])
		const error = Error('You must provide two arguments the --muscle flag and a value')
		jest.isolateModules(async () => {
			const fixture = require('../../src/index').default
			await expect(fixture).rejects.toThrow(error)
		});
	})

	it('should throw an error if only one argument is passed', async () => {
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs, '--muscle'])
		const error = Error('You must provide two arguments the --muscle flag and a value')
		jest.isolateModules(async () => {
			const fixture = require('../../src/index').default
			await expect(fixture).rejects.toThrow(error)
		})
	})

	it('should throw an error if three arguments are passed', async () => {
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs, '--muscle'])
		const error = Error('You must provide two arguments the --muscle flag and a value')
		jest.isolateModules(async () => {
			const fixture = require('../../src/index').default
			await expect(fixture).rejects.toThrow(error)
		})
	})

	it('should throw an error if muscle group flag is not passed as first argument', async () => {
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs, '--muscle'])
		const error = Error('You must provide two arguments the --muscle flag and a value')
		jest.isolateModules(async () => {
			const fixture = require('../../src/index').default
			await expect(fixture).rejects.toThrow(error)
		})
	})

	it('should throw an error if requested muscle does not exist', async () => {
		const requestedMuscle = 'fakeMuscle'
		const mockMuscleResponse = createHttpResponse()
		mockAxios.mockResolvedValueOnce(Promise.resolve(mockMuscleResponse))
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs, '--muscle', requestedMuscle])
		const error = Error(`The requested muscle group: ${requestedMuscle} does not exist`)
		jest.isolateModules(async () => {
			const fixture = require('../../src/index').default
			await expect(fixture).rejects.toThrow(error)
		})
	})

	it('should display a list of exercises which includes name, description & other_muscles', async () => {
		console.log = jest.fn()
		const requestedMuscle = 'fakeMuscle'
		const exerciseName = 'exercise'
		const exerciseDescription = 'description'
		const mockMuscleResults = [
			{
				id: 1,
				name: requestedMuscle
			}
		]
		const mockExerciseResults = [
			{
				id: 1,
				name: exerciseName,
				description: exerciseDescription,
				muscles: [],
				muscles_secondary: []
			}
		]
		const mockMuscleResponse = createHttpResponse(mockMuscleResults)
		const mockExerciseResponse = createHttpResponse(mockExerciseResults)
		const baseArgs = ['node', 'path/to/script']
		process.argv = process.argv.concat([...baseArgs, '--muscle', requestedMuscle])
		mockAxios.mockResolvedValueOnce(Promise.resolve(mockMuscleResponse))
		mockAxios.mockResolvedValueOnce(Promise.resolve(mockExerciseResponse))
		jest.isolateModules(async () => {
			await require('../../src/index').default
			expect(console.log).toBeCalledWith({
				name: exerciseName,
				description: exerciseDescription,
				other_muscles: ''
			})
		})
	})

	function createHttpResponse(results: object[] = []) {
		return {
			data: {
				results: results
			}
		}
	}

})
