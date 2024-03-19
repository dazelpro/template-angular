import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
	declarations: [
		SidebarComponent,
		ToolbarComponent,
		MovieCardComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		TranslateModule
	],
	exports: [
		SidebarComponent,
		ToolbarComponent,
		MovieCardComponent
	]
})
export class SharedModule { }
