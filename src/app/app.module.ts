import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { PrimengModule } from './primeng.module';
import { CadastroProdutosComponent } from './telas/produto/cadastro-produtos/cadastro-produtos.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CadastroFuncionarioComponent } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioService } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.service';



@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    CadastroFuncionarioComponent,
    CadastroProdutosComponent
  ],
  imports: [
    BrowserModule,
    PrimengModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [
    FuncionarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
