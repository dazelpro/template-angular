import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BearerHandler } from '../handlers/bearer.hendler';
import { HttpResponse } from '../models/http.model';
import { Movie } from '../models/movie.model';

@Injectable({
	providedIn: 'root'
})
export class tmdbService {
	protected readonly http: HttpClient;

	constructor(bearerHandler: BearerHandler) {
		this.http = new HttpClient(bearerHandler);
	}

	getUpcomingMovies() {
		return this.http.get<HttpResponse<any>>(`${environment.api.url}/movie/upcoming`);
	}

	getNowPlayingMovies() {
		return this.http.get<HttpResponse<any>>(`${environment.api.url}/movie/now_playing`);
	}

	getDetailMovie(id: number) {
		return this.http.get<Movie>(`${environment.api.url}/movie/${id}`);
	}

	getRecommendations(id: number) {
		return this.http.get<HttpResponse<any>>(`${environment.api.url}/movie/${id}/recommendations`);
	}

	getMoviesList(params: any, url: string) {
		return this.http.get<HttpResponse<any>>(`${environment.api.url}/movie/${url}`, { params });
	}
}
