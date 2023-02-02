import {GetExerciseRequest} from '../../../src/requests/GetExerciseRequest'
import axios from 'axios'

jest.mock('axios')

describe('GetExerciseRequest', () => {
	const mockAxios = axios as jest.MockedFunction<typeof axios>

	it('should be a get request', () => {
		const fixture = new GetExerciseRequest()
		expect(fixture.method).toEqual('GET')
	})

	it('should request the correct URL', () => {
		const fixture = new GetExerciseRequest()
		expect(fixture.url).toEqual('https://wger.de/api/v2/exercise')
	})

	it('should send headers', () => {
		const fixture = new GetExerciseRequest()
		expect(fixture.headers).toEqual({
			accept: 'application/json'
		})
	})

	it('should return null if no data returned from request', async () => {
		const fixture = new GetExerciseRequest()
		await expect(fixture.send()).resolves.toEqual(null)
	})

	it('should return results if data returned from request', async () => {
		const mockResult = []
		const mockResponse = {
			data: {
				results: mockResult
			}
		}
		const fixture = new GetExerciseRequest()
		mockAxios.mockImplementationOnce(() => Promise.resolve(mockResponse))
		await expect(fixture.send()).resolves.toEqual(mockResult)
	})

})
