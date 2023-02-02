export function validateConsoleArguments(args: string[]): void {
	const muscleFlag = '--muscle'
	if (args.length !== 2 || args[0] !== muscleFlag) {
		throw new Error(`You must provide two arguments the ${muscleFlag} flag and a value`)
	}
}
