import {MuscleResult} from '@root/types/MuscleResult'

export function resolveRequestedMuscle(
	requestedMuscle: string,
	muscles: MuscleResult[]
): MuscleResult|never {
	const selectedMuscle = muscles.find((muscle) => {
		const muscleNameLower = muscle?.name?.toLowerCase()
		const muscleEnNameLower = muscle?.name_en?.toLowerCase()
		const requestedMuscleLower = requestedMuscle.toLowerCase()
		return muscleNameLower === requestedMuscleLower || muscleEnNameLower === requestedMuscleLower
	})
	if (!selectedMuscle) {
			throw new Error(`The requested muscle group: ${requestedMuscle} does not exist`)
	}
	return selectedMuscle
}
