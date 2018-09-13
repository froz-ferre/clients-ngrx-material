import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientsModule } from './clients/clients.module';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './clients/reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ClientsModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 15
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
