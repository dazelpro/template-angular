export interface HttpResponse<T> {
	url(url: any): unknown;
	code: string;
	results: T;
	msg: string;
}
