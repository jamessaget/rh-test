import {HttpMethods} from '../types/HttpMethods'
import {BaseRequest} from '../requests/BaseRequest'
import {ExerciseResult} from '../types/ExerciseResult'
import {WgerResponse} from '../types/WgerResponse'

export class GetExerciseRequest extends BaseRequest<WgerResponse<ExerciseResult>, ExerciseResult> {

	public url = 'https://wger.de/api/v2/exercise'
	public method = HttpMethods.GET
	public headers = {
		accept: 'application/json'
	}
	private muscleId: number|null
	protected responseResultsKey = 'results'

	constructor(muscleId: number|null = null) {
		super()
		this.muscleId = muscleId
	}

	protected getQueryParameters() {
		const queryParameters = {}
		if (this.muscleId) {
			queryParameters['muscle'] = this.muscleId
		}
		return queryParameters
	}

}
