import { CadastroProdutosComponent } from './telas/produto/cadastro-produtos/cadastro-produtos.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { CadastroFuncionarioComponent } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.component';


const ROUTES: Routes  = [
    {path: 'produtos', component: CadastroProdutosComponent},
    {path: 'funcionarios', component: CadastroFuncionarioComponent}

]

export { ROUTES }