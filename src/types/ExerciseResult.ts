export type ExerciseResult = {
	id: number,
	uuid: string,
	name: string,
	exercise_base: number,
	description: string,
	creation_date: string,
	category: number,
	muscles: number[]
	muscles_secondary: number[],
	equipment: number[],
	language: number,
	licence: number,
	license_author: string,
	variations: number[],
	author_history: string[]
}
