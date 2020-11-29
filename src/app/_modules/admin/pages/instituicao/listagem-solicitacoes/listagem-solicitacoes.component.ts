import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SolicitacaoModel } from './../../../../../_core/model/solicitacao-model';
import { SolicitacaoRepository } from './../../../../../_core/repository/solicitacao-repository';
import { SituacaoSolicitacaoModel } from './../../../../../_core/model/situacao-solicitacao-model';
import { SituacaoSolicitacaoRepository } from './../../../../../_core/repository/situacao-solicitacao-repository';

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
  disabled: boolean;
  situacaoSolicitacao: any = [];
  justificativa: string;
  soli: any; //Objeto solicitação

  constructor(public solicitacaoRepository: SolicitacaoRepository,
    public situacaoSolicitacaoRepository: SituacaoSolicitacaoRepository,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    public config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.carregaSolicitacoes();
    this.buscarSituacoesSolicitacoes();
  }

  addArray(object) {
    this.solicitacoes.push(object);
  }

  addArrayS(object) {
    this.situacaoSolicitacao.push(object);
  }

  carregaSolicitacoes() {
    this.solicitacaoRepository.getAllSolicitacoes().subscribe((resposta) => {
      this.addArray(resposta);
    });
  }

  buscarSituacoesSolicitacoes() {
    this.situacaoSolicitacaoRepository.getAllSituacaoSolicitacoes().subscribe((resposta) => {
      this.addArrayS(resposta);
    });
  }

  adicionaSituacao(solicitacao, tipo) {
    let dados: any;

    if (tipo == 1) {
      dados = {
        situacao: "Recebida",
        solicitacao: {
          id: solicitacao.id,
        },
      } as SituacaoSolicitacaoModel;

      if (solicitacao.id) {
        this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
          this.successToastr(1);
          console.log("Recebida " + dados.solicitacao.id + dados.situacao)
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
          this.successToastr(2);
          console.log("AtualizadaAceita " + dados.solicitacao.id + dados.situacao)
        })
      }
    }
  }

  solicitacaoNegada() {
    console.log(this.soli)
    let dados: any;
    dados = {
      situacao: "Recusada",
      solicitacao: {
        id: this.soli.id,
      },
    } as SituacaoSolicitacaoModel;

    const dadosS = {
      id: this.soli.id,
      situacao: "Finalizada",
      tipoSolicitacao: this.soli.tipoSolicitacao,
      justificativa: this.justificativa,
      data: this.soli.data,
      animal: {
        id: this.soli.animal.id
      },
      pessoa: {
        id: this.soli.pessoa.id
      }
    } as SolicitacaoModel;

    if (this.soli.id) {
      this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
        console.log("Solicitacao recusada " + dados.solicitacao.id)

        this.solicitacaoRepository.putSolicitacao(dadosS).subscribe(() => {
          this.successToastr(3);
          console.log("Solicitação atualizada com sucesso" + dadosS.id)
        })
      })
    }
  }

  nomeSituacao(idSolicitacao: number): string {
    let aux: string;
    this.situacaoSolicitacao.forEach(element => {
      if (element.solicitacao.id == idSolicitacao) {
        aux = element.situacao;
      }
    });
    return aux;
  }

  refresh(): void {
    window.location.reload();
  }

  public successToastr(parametro) {
    if (parametro == 1) {
      this.toastr.success("Confirmado o recebimento da solicitação");
    } else if (parametro == 2) {
      this.toastr.success("Confirmado a aprovação da solicitação");
    } else if (parametro == 3) {
      this.toastr.success("Confirmado a negação da solicitação");
    }
    this.refresh();
  }

  openModal(solicitacao, content) {
    this.modalService.open(content, { centered: true });
    this.soli = solicitacao;
    console.log(this.soli)
  }

}