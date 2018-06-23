import { Component, OnInit } from '@angular/core';
import { Funcionario } from './cadastro-funcionario.model';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {
  
  funcionario: Funcionario;
  constructor() {
    this.funcionario = new Funcionario();
   }

  ngOnInit() {
  }

}
