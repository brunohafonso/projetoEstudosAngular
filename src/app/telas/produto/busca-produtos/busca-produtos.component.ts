import { BuscaProdutosService } from './busca-produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-busca-produtos',
  templateUrl: './busca-produtos.component.html',
  styleUrls: ['./busca-produtos.component.css']
})
export class BuscaProdutosComponent implements OnInit {

  produtos: Produto[]

  constructor(private buscaProdutosService: BuscaProdutosService) { }

  ngOnInit() {
    this.buscaProdutosService.getAllProdutos().subscribe(produtos => this.produtos = produtos);
  }

}
