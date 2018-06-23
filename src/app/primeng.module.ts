import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule,
        InputTextModule,
        SpinnerModule,
        DialogModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    TableModule,
    SpinnerModule,
    InputTextModule,
    TableModule,
    DialogModule   
  ],
  declarations: []
})
export class PrimengModule { }
