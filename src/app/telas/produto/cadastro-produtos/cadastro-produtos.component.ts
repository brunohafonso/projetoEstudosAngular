import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {

  produto: Produto;

  constructor() { }

  ngOnInit() {
  }
}