import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UpcomingMovie } from '../../core/models/upcoming.model';
import { tmdbService } from '../../core/services/tmdb.service';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

	upcomingMovies: UpcomingMovie[] = [];
	nowPlayingMovies: UpcomingMovie[] = [];

	constructor(private movieService: tmdbService, private router: Router) { }

	ngOnInit(): void {
		this.getUpcomingMovie();
		this.getNowPlayingMovie();
	}

	getUpcomingMovie() {
		this.movieService.getUpcomingMovies().subscribe({
			next: (r) => {
				this.upcomingMovies = r.results;
			},
			error: (e) => {
				console.log(e);
			}
		});
	}

	getNowPlayingMovie() {
		this.movieService.getNowPlayingMovies().subscribe({
			next: (r) => {
				this.nowPlayingMovies = r.results;

			},
			error: (e) => {
				console.log(e);
			}
		});
	}

	getImageUrl(path: string): string {
		const baseUrl = environment.api.imageBackdrop;
		return `${baseUrl}${path}`;
	}

	goToDetail(arr: number) {
		this.router.navigate(['/movies/' + arr]);
	}

}
