import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

const ExportMatModule = [
	MatButtonModule,
	MatRippleModule,
	MatDialogModule,
	MatMenuModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatProgressBarModule,
	MatTabsModule,
	MatSelectModule
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		ExportMatModule
	],
	exports: [ExportMatModule]
})
export class MaterialModule { }
