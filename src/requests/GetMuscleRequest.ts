import {HttpMethods} from '../types/HttpMethods'
import {BaseRequest} from '../requests/BaseRequest'
import {MuscleResult} from '../types/MuscleResult'
import {WgerResponse} from '../types/WgerResponse'

export class GetMuscleRequest extends BaseRequest<WgerResponse<MuscleResult>, MuscleResult> {
	public url = 'https://wger.de/api/v2/muscle'
	public method = HttpMethods.GET
	public headers = {
		accept: 'application/json'
	}
	protected responseResultsKey = 'results'

}
