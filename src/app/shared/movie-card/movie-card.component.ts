import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

	@Input() movie: any;

	constructor(private router: Router,) { }

	getImageUrlPoster(posterPath: string): string {
		const baseUrl = environment.api.imagePoster;
		return `${baseUrl}${posterPath}`;
	}

	goToDetail(arr: number) {
		this.router.navigate(['/movies/' + arr]);
	}
}
