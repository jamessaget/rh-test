import {GetMuscleRequest} from './requests/GetMuscleRequest'
import {GetExerciseRequest} from './requests/GetExerciseRequest'
import {validateConsoleArguments} from './utility/validateConsoleArguments'
import {resolveMuscleNamesFromIds} from './utility/resolveMuscleNamesFromIds'
import {resolveRequestedMuscle} from './utility/resolveRequestedMuscle'


export default (async () => {
	const args = process.argv.slice(2)
	validateConsoleArguments(args)
	const requestedMuscle = args[1]
	const muscles = await (new GetMuscleRequest()).send()
	const selectedMuscle = resolveRequestedMuscle(requestedMuscle, muscles)
	const exercises = await (new GetExerciseRequest(selectedMuscle.id)).send()
	for (const exercise of exercises) {
		console.log({
			name: exercise.name,
			description: exercise.description,
			other_muscles: resolveMuscleNamesFromIds(muscles, [...exercise.muscles, ...exercise.muscles_secondary])
		})
	}
})()
