import { ToastrService } from 'ngx-toastr';
import { SituacaoSolicitacaoRepository } from './../../../../../_core/repository/situacao-solicitacao-repository';
import { SolicitacaoRepository } from './../../../../../_core/repository/solicitacao-repository';
import { SituacaoSolicitacaoModel } from './../../../../../_core/model/situacao-solicitacao-model';
import { SolicitacaoModel } from './../../../../../_core/model/solicitacao-model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AnimalModel } from './../../../../../_core/model/animal-model';
import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confimacao-solicitacao',
  templateUrl: './confimacao-solicitacao.component.html',
  styleUrls: ['./confimacao-solicitacao.component.css']
})
export class ConfimacaoSolicitacaoComponent implements OnInit {

  formSolicitacao: FormGroup;
  controlName: string;
  imagem: string;

  constructor(public animalRepositoy: AnimalRepository, 
              private fb: FormBuilder, 
              private router: Router,
              private solicitacaoRepository: SolicitacaoRepository,
              private situacaoSolicitacaoRepository: SituacaoSolicitacaoRepository,
              private toastr: ToastrService,) { }

  ngOnInit(): void {
    const idAnimal: string = localStorage.getItem('idAnimal');
    this.animalRepositoy.getAnimalById(parseInt(idAnimal)).subscribe((animal: AnimalModel) => {
      this.criarFormulario(animal);
      this.imagem = animal.imagem.url;
    });
  }

  private criarFormulario(animal: AnimalModel): void {

    this.formSolicitacao = this.fb.group({
      nome: [animal.nome,],
      especie: [animal.especie,],
      sexo: [animal.sexo,],
      contato: [animal.contato,],
    });
  }

  cadastrarSolicitacao() {
    const idAnimal: string = localStorage.getItem('idAnimal');
    const tipoSolicitacao: string = localStorage.getItem('tipoSolicitacao');

    const dadosS = {
      situacao: "Enviada",
      tipoSolicitacao: tipoSolicitacao,
      justificativa: "",
      animal: {
        id: parseInt(idAnimal)
      },
    } as SolicitacaoModel;
    console.log(dadosS)
    
    this.solicitacaoRepository.postSolicitacao(dadosS).subscribe((resposta) => {
      console.log("Solicitacao enviada ")
      const dados = {
        situacao: "Enviada",
        solicitacao: {
          id: resposta.id,
        },
      } as SituacaoSolicitacaoModel;
      
      this.situacaoSolicitacaoRepository.postSituacaoSolicitacao(dados).subscribe(() => {
        console.log("Solicitacao enviada " + dados.solicitacao.id)
        this.successToastr();
        this.router.navigate(['/pessoa']);
      });
    });

  }

  public successToastr() {
    this.toastr.success("Solicitação enviada com sucesso!");
  }

  trocaRota() {
    this.router.navigate(['']);
  }

}
