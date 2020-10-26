import { Router } from '@angular/router';
import { SolicitacaoModel } from './../../../../../_core/model/solicitacao-model';
import { SolicitacaoRepository } from './../../../../../_core/repository/solicitacao-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-solicitacoes',
  templateUrl: './listagem-solicitacoes.component.html',
  styleUrls: ['./listagem-solicitacoes.component.css']
})
export class ListagemSolicitacoesComponent implements OnInit {

  isCollapsed = true;

  solicitacoes: any = [];
  solicitacao: SolicitacaoModel;
  page = 1;
  pageSize = 2;

  constructor(public solicitacaoRepository: SolicitacaoRepository,
              public router: Router) { }

  ngOnInit(): void {
    this.carregaSolicitacoes();
  }

  // carregaSolicitacoes() {
  //   this.solicitacaoRepository.getAllSolicitacoes().subscribe({
  //     next: solicitacoes => {
  //       this.solicitacoes = solicitacoes,
  //       console.log(solicitacoes)
  //     }
  //   });
  // }

  carregaSolicitacoes() {
    this.solicitacaoRepository.getAllSolicitacoes().subscribe((resposta) => {
      this.addArray(resposta);
    });
  }

  addArray(object) {
    this.solicitacoes.push(object);
  }

  aceitarSolicitacao(){
    // this.solicitacaoRepository.putSolicitacao(this.solicitacao).subscribe(() => {
    //   console.log("Solicitação atualizada com sucesso")
    // })
    // this.router.navigate(["/solicitacoes"])
  }
}