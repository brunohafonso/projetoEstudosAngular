import { CadastroProdutosComponent } from './telas/produto/cadastro-produtos/cadastro-produtos.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { BuscaProdutosComponent } from './telas/produto/busca-produtos/busca-produtos.component';
import { CadastroFuncionarioComponent } from './telas/funcionarios/cadastro-funcionario/cadastro-funcionario.component';


const ROUTES: Routes  = [
    {path: 'produtos', component: CadastroProdutosComponent},
    {path: 'busca-produtos', component: BuscaProdutosComponent},
    {path: 'funcionarios', component: CadastroFuncionarioComponent}

]

export { ROUTES }