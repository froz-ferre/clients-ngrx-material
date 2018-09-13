import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { EffectsModule } from '@ngrx/effects';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {MatNativeDateModule, MatRippleModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import { ApiService } from './services/api.service';
import { ApiEffects } from './services/api.effect';


/**
 * NgModule that includes all Material modules.
*/



const MAT = [
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    ...MAT,
    CommonModule,
    HttpClientModule,
    EffectsModule.forRoot([ApiEffects])
  ],
  providers: [ApiService],
  declarations: [SearchComponent, ClientsListComponent, ClientDetailsComponent],
  exports: [SearchComponent, ClientsListComponent, ClientDetailsComponent,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    CdkTableModule,
    A11yModule,
    BidiModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule
  ]
})
export class ClientsModule { }
