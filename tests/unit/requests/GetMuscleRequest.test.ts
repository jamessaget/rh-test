import {GetMuscleRequest} from '../../../src/requests/GetMuscleRequest'
import axios from 'axios'

jest.mock('axios')

describe('GetMuscleRequest', () => {
	const mockAxios = axios as jest.MockedFunction<typeof axios>

	it('should be a get request', () => {
		const fixture = new GetMuscleRequest()
		expect(fixture.method).toEqual('GET')
	})

	it('should request the correct URL', () => {
		const fixture = new GetMuscleRequest()
		expect(fixture.url).toEqual('https://wger.de/api/v2/muscle')
	})

	it('should send headers', () => {
		const fixture = new GetMuscleRequest()
		expect(fixture.headers).toEqual({
			accept: 'application/json'
		})
	})

	it('should return null if no data returned from request', async () => {
		const fixture = new GetMuscleRequest()
		await expect(fixture.send()).resolves.toEqual(null)
	})

	it('should return results if data returned from request', async () => {
		const mockResult = []
		const mockResponse = {
			data: {
				results: mockResult
			}
		}
		const fixture = new GetMuscleRequest()
		mockAxios.mockImplementationOnce(() => Promise.resolve(mockResponse))
		await expect(fixture.send()).resolves.toEqual(mockResult)
	})

})
