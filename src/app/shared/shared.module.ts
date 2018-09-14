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
import { ActivateDirective } from './directives/activate.directive';

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
  declarations: [ActivateDirective],
  imports: [
    CommonModule,
    ...MAT
  ],
  exports: [...MAT, ActivateDirective]
})
export class SharedModule { }
