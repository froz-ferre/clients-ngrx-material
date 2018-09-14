import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

import { EffectsModule } from '@ngrx/effects';

import { ClientService } from './services/client.service';
import { ClientEffects } from './services/client.effect';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    EffectsModule.forRoot([ClientEffects])
  ],
  providers: [ClientService],
  declarations: [SearchComponent, ClientsListComponent, ClientDetailsComponent],
  exports: [SearchComponent, ClientsListComponent, ClientDetailsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ClientsModule { }
