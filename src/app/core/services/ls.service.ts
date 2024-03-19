import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	saveFavorites(favorites: any[]): void {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	getFavorites(): any[] {
		return JSON.parse(localStorage.getItem('favorites') || '[]');
	}

}
