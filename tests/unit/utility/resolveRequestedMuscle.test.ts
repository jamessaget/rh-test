import {resolveRequestedMuscle} from '../../../src/utility/resolveRequestedMuscle'
import {MuscleResult} from '../../../src/types/MuscleResult'

describe('resolveRequestedMuscle', () => {

	it('should throw an error if no matches found', () => {
		const requestedMuscle = 'test'
		const error = Error(`The requested muscle group: ${requestedMuscle} does not exist`)
		const muscleResults = [{}] as MuscleResult[]
		expect(() => resolveRequestedMuscle(requestedMuscle, muscleResults)).toThrow(error)
	})

	it('should return a muscle result if match found', () => {
		const requestedMuscle = 'test'
		const muscleResults = [{
			name: 'test'
		}] as MuscleResult[]
		const result = resolveRequestedMuscle(requestedMuscle, muscleResults)
		expect(result).toEqual(muscleResults[0])
	})

})
