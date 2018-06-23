import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PrimengModule } from './primeng.module';
import { CadastroProdutosComponent } from './telas/produto/cadastro-produtos/cadastro-produtos.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroProdutosComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
