import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ClientsModule } from '../clients/clients.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientsModule
  ],
  exports: [
    SharedModule,
    ClientsModule
  ],
  declarations: []
})
export class CoreModule { }
