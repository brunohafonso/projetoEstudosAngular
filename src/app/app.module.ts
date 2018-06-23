import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PrimengModule } from './primeng.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { BuscaProdutosComponent } from './telas/produto/busca-produtos/busca-produtos.component';
import { CadastroProdutosService } from './telas/produto/cadastro-produtos/cadastro-produtos.service';
import { CadastroProdutosComponent } from './telas/produto/cadastro-produtos/cadastro-produtos.component';



@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroProdutosComponent,
    BuscaProdutosComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CadastroProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
