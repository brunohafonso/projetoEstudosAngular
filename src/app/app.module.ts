import { BuscaProdutosService } from './telas/produto/busca-produtos/busca-produtos.service';
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
import { CadastroFuncionarioComponent } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroProdutosComponent,
    BuscaProdutosComponent,
    CadastroFuncionarioComponent,
    CadastroProdutosComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    FuncionarioService,
    CadastroProdutosService,
    BuscaProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
