import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule,
        InputTextModule,
        SpinnerModule,
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    SpinnerModule,
    InputTextModule    
  ],
  declarations: []
})
export class PrimengModule { }
