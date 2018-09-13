import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientsModule } from './clients/clients.module';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { reducers } from './clients/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ClientsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
