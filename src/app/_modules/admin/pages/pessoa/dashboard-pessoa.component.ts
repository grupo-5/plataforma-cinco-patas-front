import { SolicitacaoModel } from './../../../../_core/model/solicitacao-model';
import { Router, ActivatedRoute } from '@angular/router';
import { SituacaoSolicitacaoRepository } from './../../../../_core/repository/situacao-solicitacao-repository';
import { SolicitacaoRepository } from './../../../../_core/repository/solicitacao-repository';
import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dashboard-pessoa',
  templateUrl: './dashboard-pessoa.component.html',
  styleUrls: ['./dashboard-pessoa.component.css']
})
export class DashboardPessoaComponent implements OnInit {

  caminho = "./../../../../../assets/images/dog-2.jpg";
  isCollapsed = true;

  solicitacoes: any = [];
  solicitacao: SolicitacaoModel;
  page = 1;
  pageSize = 5;
  situacaoSolicitacao: any =[];

  constructor(public solicitacaoRepository: SolicitacaoRepository,
    public situacaoSolicitacaoRepository: SituacaoSolicitacaoRepository,
    public router: Router,
    public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.carregaSolicitacoes();
    this.buscarSituacoesSolicitacoes();
  }

  carregaSolicitacoes() {
    this.solicitacaoRepository.getAllSolicitacoes().subscribe((resposta) => {
      this.addArray(resposta);
      // this.verificarRecebimento(resposta.id);
    });
  }

  addArray(object) {
    this.solicitacoes.push(object);
  }
  addArrayS(object) {
    this.situacaoSolicitacao.push(object);
  }

  buscarSituacoesSolicitacoes( ){
    this.situacaoSolicitacaoRepository.getAllSituacaoSolicitacoes().subscribe((resposta) => {
        this.addArrayS(resposta);
    });
  }
  
  nomeSituacao(idSolicitacao: number): string{
    let aux: string;
    this.situacaoSolicitacao.forEach(element => {
      if (element.solicitacao.id == idSolicitacao){
        aux = element.situacao;
      }
    });
    return aux;
  }
}
