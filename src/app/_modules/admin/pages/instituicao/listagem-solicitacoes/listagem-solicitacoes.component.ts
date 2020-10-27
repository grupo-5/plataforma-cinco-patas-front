import { Router, ActivatedRoute } from '@angular/router';
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
    public router: Router,
    public route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.carregaSolicitacoes();

    var codigoSolicitacao = this.route.snapshot.params['id'];

    // if (codigoSolicitacao) {
    //   this.carregarSolicitacao(codigoSolicitacao);
    // }
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

  aceitarSolicitacao() {
    const dados = {
      id: 5,//this.formulario.value.id,
      situacao: "Finalizada com Sucesso",
      tipoSolicitacao: "Adoção",
      justificativa: "Aprovada",
      data: "2020-10-23T23:20:18.597302-03:00",
      animal: {
        id: 1
      },
      pessoa: {
        id: 1
      }
    } as SolicitacaoModel;

    if (dados.id) {
      this.solicitacaoRepository.putSolicitacao(dados).subscribe(() => {
        console.log("Solicitação atualizada com sucesso")
      })

    }
    this.router.navigate(["/solicitacoes"])
  }

}