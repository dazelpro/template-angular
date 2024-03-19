import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

	@Output() sidenavToggle = new EventEmitter<void>();
	@Input() isSidenavOpen!: boolean;
	currentLanguage: string;

	constructor(private translate: TranslateService) {
		this.isSidenavOpen = true;
		this.currentLanguage = this.translate.currentLang;
	}

	toggleSidenav(): void {
		this.sidenavToggle.emit();
	}

	changeLanguage(lang: string): void {
		this.translate.use(lang);
		this.currentLanguage = lang;
	}

}
