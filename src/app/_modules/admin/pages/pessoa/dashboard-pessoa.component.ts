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
  pageSize = 1;
  situacaoSolicitacao: any = [];
  caminhoImg: string;
  estadoJustificativa: boolean;
  habilitaBotao: boolean = true;
  semDados: boolean = false;

  constructor(public solicitacaoRepository: SolicitacaoRepository,
    public situacaoSolicitacaoRepository: SituacaoSolicitacaoRepository,
    public router: Router,
    public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.carregaSolicitacoes();
    this.buscarSituacoesSolicitacoes();
  
  }

  carregaSolicitacoes() {
    this.solicitacaoRepository.getAllSolicitacoesPessoaPromise().then((resposta) => {
      this.solicitacoes = resposta;
      if(this.solicitacoes <= 0){
        this.semDados = true;
      }
    });
  }

  addArrayS(object) {
    this.situacaoSolicitacao.push(object);
  }

  buscarSituacoesSolicitacoes() {
    this.situacaoSolicitacaoRepository.getAllSituacaoSolicitacoes().subscribe((resposta) => {
      this.addArrayS(resposta);
    });
  }

  // Preenche a situaçãoo no card
  situacaoAtual(idSolicitacao: number): string {
    let aux: string;
    this.situacaoSolicitacao.forEach(element => {
      if (element.solicitacao.id == idSolicitacao) {
        if (element.situacao == "Recusada" || element.situacao == "Aceita") {
          aux = element.situacao;
          if (element.situacao == "Recusada") {
            this.estadoJustificativa = true;
            this.habilitaBotao = true;
          } else {
            this.estadoJustificativa = false;
            this.habilitaBotao = false;
          }
        }
      }
    });
    return aux;
  }

  // Preenche o timeline
  nomeSituacao(idSolicitacao: number): string {
    let aux: string;
    this.situacaoSolicitacao.forEach(element => {
      if (element.solicitacao.id == idSolicitacao) {
        if (element.situacao == "Enviada") {
          aux = "Pedido";
        } else if (element.situacao == "Recebida") {
          aux = "Análise";
        } else if (element.situacao == "Aceita" || element.situacao == "Recusada") {
          aux = "Decisão";
        }
      }
    });
    return aux;
  }

  trocaRota = (evento?) => {
    localStorage.setItem('depoimento','true');
    this.router.navigate(['cadastro-depoimento']);
  }
}
