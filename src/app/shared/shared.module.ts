import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const MAT = [
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT
  ],
  exports: [...MAT]
})
export class SharedModule { }
