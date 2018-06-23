import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produto.model';
import { app_api } from '../../../app.api';

@Injectable()
export class CadastroProdutosService {

  constructor(private http: HttpClient) { }

  createProduto(produto: Produto) {
    return this.http.post<Produto>(`${app_api}/projeto-angular`, produto);
  }
}
