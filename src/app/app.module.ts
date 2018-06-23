import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PrimengModule } from './primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
