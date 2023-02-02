import axios, {AxiosResponse} from 'axios'
import {HttpMethods} from '../types/HttpMethods'

export abstract class BaseRequest<ResponseType, ResultType> {

	abstract url: string
	abstract method: HttpMethods
	protected headers: Record<string, string|string[]|number|boolean|null>|null = null
	protected params: Record<string, string>|null = null
	protected data: any|null = null
	protected responseDataKey: string|null = null

	public async send(): Promise<ResultType[]> {
		let results = []
		let response
		let url = this.url
		do {
			response = await axios<ResponseType>({
				url: this.stripDuplicateQueryParameters(url),
				method: this.method,
				headers: this.getHeaders(),
				params: this.getQueryParameters(),
				data: this.getData()
			})
			if (!response) {
				return null
			}
			results = this.mergeResults(results, response)
			url = this.amendUrlToAccountForPagination(response)

		} while (this.paginationCondition(response))
		return results
	}

	protected mergeResults(results: ResponseType[], response: AxiosResponse<ResponseType>): ResponseType[] {
		const resultData = response.data[this.responseDataKey] ?? response.data
		if (Array.isArray(resultData)) {
			return [...results, ...resultData]
		}
		results.push(resultData)
		return results
	}

	protected stripDuplicateQueryParameters(url: string): string {
		const urlQuerySplit = url.split('?')
		if (urlQuerySplit.length < 2) {
			return url
		}
		const queryStringArray = urlQuerySplit[1].split('&')
		const existingQueryParameters = new URLSearchParams(this.getQueryParameters()).toString().split('&')
		const uniqueQueryStringParameters = [...new Set(queryStringArray)].filter((queryStringParameter) => {
			return !existingQueryParameters.includes(queryStringParameter)
		}).join('&')
		return urlQuerySplit[0] + '?' + uniqueQueryStringParameters
	}

	protected paginationCondition(response: AxiosResponse<ResponseType>): boolean {
		return !!response.data['next']
	}

	protected amendUrlToAccountForPagination(response: AxiosResponse<ResponseType>): string | null {
		return response.data['next'] ?? null
	}

	protected getQueryParameters(): Record<string, string> | null {
		return this.params
	}

	protected getHeaders(): Record<string, string|string[]|number|boolean|null> | null {
		return this.headers
	}

	protected getData(): any|null {
		return this.data
	}
}
