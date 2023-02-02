import {resolveMuscleNamesFromIds} from '../../../src/utility/resolveMuscleNamesFromIds'
import {MuscleResult} from '../../../src/types/MuscleResult'

describe('resolveMuscleNamesFromIds', () => {

	it('should return an empty string if no matches found', () => {
		const muscleResult = [{}] as MuscleResult[]
		const exerciseMuscleIds = [1,2,3]
		const result = resolveMuscleNamesFromIds(muscleResult, exerciseMuscleIds)
		expect(result).toEqual("")
	})

	it('should return a comma separated list of strings if ids found', () => {
		const muscleNameOne = 'fakeMuscle'
		const muscleNameTwo = 'fakeMuscle2'
		const expectedResult = `${muscleNameOne}, ${muscleNameTwo}`
		const muscleResult = [
			{
				id: 1,
				name: muscleNameOne
			},
			{
				id: 2,
				name: muscleNameTwo
			}
		] as MuscleResult[]
		const exerciseMuscleIds = [1,2,3]
		const result = resolveMuscleNamesFromIds(muscleResult, exerciseMuscleIds)
		expect(result).toEqual(expectedResult)
	})

})
