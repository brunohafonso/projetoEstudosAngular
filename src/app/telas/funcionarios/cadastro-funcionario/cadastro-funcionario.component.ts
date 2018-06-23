import { Component, OnInit } from '@angular/core';
import { Funcionario } from './cadastro-funcionario.model';
import { FuncionarioService } from './cadastro-funcionario.service';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  funcionario: Funcionario;
  tabelaFuncionarios: any[] = [];
  constructor(private cadastroService: FuncionarioService) {
    this.funcionario = new Funcionario();
  }

  ngOnInit() {
  }
  salvar() {
    this.cadastroService.salvar(this.funcionario).subscribe((funcionarios) => {
      alert('Funcionário Salvo com Sucesso!');
    });
  }
  getFuncionarios() {
    this.cadastroService.getFuncionarios().subscribe((tabela: any[]) => {
      this.tabelaFuncionarios = tabela;
    });
  }
}
