import {
    Injectable
  } from '@angular/core';
  import {
    Http,
    Response
  } from '@angular/http';
  import 'rxjs/add/operator/map';
  import {
    HttpClient,
    HttpResponse
  } from '@angular/common/http';
  import {
    Observable
  } from 'rxjs/Observable';
  @Injectable()
  export class FuncionarioService {

    constructor(private http: HttpClient) {}

    private urlPost = 'http(s)://5b2e678b47942a001493696b.mockapi.io/funcionarios';
   
    salvar(funcionario) {
      return  this.http.post(this.urlPost, funcionario);
    }
    atualizar(funcionario) {
        return this.http.put(`${this.urlPost}/${funcionario.id}`, funcionario);
    }
    getFuncionarios() {
        return this.http.get(this.urlPost);
    }
    delete(idFuncionario) {
       return this.http.delete(`${this.urlPost}/${idFuncionario}`);
    }

  }
