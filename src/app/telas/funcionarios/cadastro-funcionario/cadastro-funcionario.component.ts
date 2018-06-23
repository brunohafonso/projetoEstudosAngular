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
  cols: any[] = [];
  funcionarioSelecionado: any;
  displayDialog: boolean
  constructor(private FuncionarioService: FuncionarioService) {
    this.funcionario = new Funcionario();
  }

  ngOnInit() {
    this.cols = [
      { header: 'Nome', field: 'nome' },
      { header: 'Idade', field: 'idade' },
      { header: 'Cargo', field: 'cargo' },
      { header: 'Salário', field: 'salario' },

    ];
    this.getFuncionarios();
  }
  salvar() {
    this.FuncionarioService.salvar(this.funcionario).subscribe((funcionarios) => {
      alert('Funcionário Salvo com Sucesso!');
      this.getFuncionarios();
      this.funcionario = new Funcionario();
    });
  }
  getFuncionarios() {
    this.FuncionarioService.getFuncionarios().subscribe((tabela: any[]) => {
      this.tabelaFuncionarios = tabela;
    });
  }
  deletar() {
    this.FuncionarioService.delete(this.funcionarioSelecionado).subscribe(() => {
      this.getFuncionarios();
    });
    }
  atualizar() {
    this.FuncionarioService.atualizar(this.funcionarioSelecionado).subscribe((funcionarios) => {
       this.getFuncionarios();
       this.displayDialog = false;
    });
  }
  onRowSelect(event) {
    this.funcionarioSelecionado = this.clone(event.data);
    this.displayDialog = true;
  }

  clone(data) {
    let dataRecebida = {};
    for (let prop in data) {
      dataRecebida[prop] = data[prop];
    }
    return dataRecebida;
  }
}
