import { SituacaoSolicitacaoModel } from './../../../../../_core/model/situacao-solicitacao-model';
import { SituacaoSolicitacaoRepository } from './../../../../../_core/repository/situacao-solicitacao-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { SolicitacaoModel } from './../../../../../_core/model/solicitacao-model';
import { SolicitacaoRepository } from './../../../../../_core/repository/solicitacao-repository';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
  pageSize = 5;
  aux: number;
  disabled : boolean;

  constructor(public solicitacaoRepository: SolicitacaoRepository,
    public situacaoSolicitacaoRepository: SituacaoSolicitacaoRepository,
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
      // this.verificarRecebimento(resposta.id);
    });
  }

  addArray(object) {
    this.solicitacoes.push(object);
  }

  adicionaSituacao(solicitacao, tipo) {
    
    console.log("aux"+this.aux)
    let dados: any ;

    if (tipo == 1) {
      dados = {
        situacao: "Recebida",
        solicitacao: {
          id: solicitacao.id,
        },
      } as SituacaoSolicitacaoModel;

      if (solicitacao.id) {
        this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
          console.log("AtualizadaRecebida " + dados.solicitacao.id + dados.situacao)
        })
      }
    } else if (tipo == 2) {
      dados = {
        situacao: "Aceita",
        solicitacao: {
          id: solicitacao.id,
        },
      } as SituacaoSolicitacaoModel;

      if (solicitacao.id) {
        this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
          console.log("AtualizadaAceita " + dados.solicitacao.id + dados.situacao)
        })
      }
    } else {
      dados = {
        situacao: "Recusada",
        solicitacao: {
          id: solicitacao.id,
        },
      } as SituacaoSolicitacaoModel;

      const dadosS = {
      id: solicitacao.id,//5,//this.formulario.value.id,
      situacao: "Finalizada",
      tipoSolicitacao: "Adoção",
      justificativa: "não cumpriu ",
      data: solicitacao.data,
      animal: {
        id: 1
      },
      pessoa: {
        id: 1
      }
    } as SolicitacaoModel;

      if (solicitacao.id) {
        this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
          console.log("AtualizadaRecusada " + dados.solicitacao.id + dados.situacao)

          this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dadosS).subscribe(() => {
            console.log("Solicitação atualizada com sucesso" + dadosS.id)
          })
        })
      }
    }

    this.router.navigate(["/solicitacoes"])
  }

  abrirModal(){
    // $("#abrirModal").modal('show');
    ($('#abrirModal') as any).modal('show');
  }

  // aceitarSolicitacao(solicitacao) {
  //   const dados = {
  //     id: solicitacao.id,//5,//this.formulario.value.id,
  //     situacao: "Finalizada com Sucesso",
  //     tipoSolicitacao: "Adoção",
  //     justificativa: "Aprovada com sucesso",
  //     data: solicitacao.data,
  //     animal: {
  //       id: 1
  //     },
  //     pessoa: {
  //       id: 1
  //     }
  //   } as SolicitacaoModel;

  //   if (dados.id) {
  //     this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
  //       console.log("Solicitação atualizada com sucesso" + dados.id)
  //     })
  //     // this.solicitacaoRepository.putSolicitacao(dados).subscribe(() => {
  //     //   console.log("Solicitação atualizada com sucesso" + dados.id)
  //     // })

  //   }
  //   this.router.navigate(["/solicitacoes"])
  // }

  confirmarRecebimento(solicitacao) {

    const dados = {
      situacao: "Recebida",
      solicitacao: {
        id: solicitacao.id,
      },
    } as SituacaoSolicitacaoModel;

    if (dados.solicitacao.id) {
      this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
        console.log("Atualizada " + dados.solicitacao.id)
      })
    }
  }

  verificarRecebimento(solicitacao): boolean {

    const dados = {
      solicitacao: {
        id: solicitacao.id,
      },
    } as SituacaoSolicitacaoModel;

    // if (dados.solicitacao.id) {
    //   this.situacaoSolicitacaoRepository.getAllSolicitacoes(dados).subscribe((res) => {
    //     console.log("Atualizada " + dados.solicitacao.id)
    //     console.log("Resposta " + res)
    //   })
    // }
    if (dados.solicitacao.id) {
      let resultado = this.situacaoSolicitacaoRepository.contSolicitacoesRecebidas(dados.solicitacao.id).subscribe((res) => {
        // console.log("Atualizada " + dados.solicitacao.id)
        // console.log("Resposta " + res) 
      })
      if (resultado) {
        console.log("resultado---------------")
        return true;
      }
    }
    return false;
  }

}