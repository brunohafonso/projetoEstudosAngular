import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule,
        InputTextModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    ButtonModule,
    
  ],
  declarations: []
})
export class PrimengModule { }
