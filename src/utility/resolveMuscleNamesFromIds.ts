import {MuscleResult} from '../types/MuscleResult'

export function resolveMuscleNamesFromIds(
	muscles: MuscleResult[],
	exerciseMuscles: number[],
): string {
	return muscles.filter(muscle => exerciseMuscles.includes(muscle.id)).map(muscle => muscle.name).join(', ')
}
