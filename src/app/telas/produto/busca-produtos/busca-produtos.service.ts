import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Produto } from '../produto.model';
import { HttpClient } from '@angular/common/http';
import { app_api } from '../../../app.api';

@Injectable()
export class BuscaProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${app_api}/projeto-angular`);
  }
}
