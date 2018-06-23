import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PrimengModule } from './primeng.module';
import { CadastroFuncionarioComponent } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.component';


@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
