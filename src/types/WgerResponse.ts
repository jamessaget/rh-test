export type WgerResponse<ResultType> = {
	results: ResultType[],
	next: string | null
}
