import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    TableModule
  ],
  declarations: []
})
export class PrimengModule { }
