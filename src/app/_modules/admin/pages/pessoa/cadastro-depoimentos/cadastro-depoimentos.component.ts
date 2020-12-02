import { DepoimentoModel } from './../../../../../_core/model/depoimento-model';
import { DepoimentoRepository } from './../../../../../_core/repository/depoimento-repository';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';

@Component({
  selector: 'app-cadastro-depoimentos',
  templateUrl: './cadastro-depoimentos.component.html',
  styleUrls: ['./cadastro-depoimentos.component.css'],
})
export class CadastroDepoimentosComponent implements OnInit {
  // Depoimentos
  formDepoimento: FormGroup;
  controlName: string;
  caminhoImg: string;
  nome: string;
  depoi: string;
  nomeBotao: string;
  texto: string;
  id: number;
  tipo=['Plataforma','Ong']

  constructor(
    public validarInputsService: ValidarInputsService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public depoimentoService: DepoimentoRepository
  ) {}

  ngOnInit(): void {
    this.caminhoImg = '../../../../../assets/images/t.jpg';
    this.nome = 'Tathiane';
    this.depoi = 'A ong que cuidou do processo de adoção do tob, foi muito atenciosa.';
    this.nomeBotao = 'Salvar';

    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      // this.depoimentoService.visualizar(this.id).subscribe((depoimento: DepoimentoModel) => this.criarFormulario(depoimento));
    } else {
      this.criarFormulario(this.criarDepoimentoEmBranco());
    }
  }
  private criarFormulario(depoimento: DepoimentoModel): void {
    this.formDepoimento = this.fb.group({
      texto: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  private criarDepoimentoEmBranco(): DepoimentoModel {
    return {} as DepoimentoModel;
  }

  reiniciarForm(): void {
    this.formDepoimento.reset();
  }

  private salvar(depoimento: DepoimentoModel): void {
    let id = 3;
    const dados: any = {
      texto: depoimento.texto,
      pessoa: {
        id: id,
      },
    };
    this.depoimentoService
      .postDepoimento(dados)
      .subscribe((resposta) => console.log(resposta));
  }

  private editar(depoimento: DepoimentoModel): void {
    // this.depoimentoService.editar(depoimento).subscribe();
  }

  submit(): void {
    this.formDepoimento.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    if (this.formDepoimento.invalid) {
      console.log('\n inválido form  ');
      return;
    }

    const depoimento = this.formDepoimento.getRawValue() as DepoimentoModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      depoimento.id = this.id;
      console.log('editar *** ' + depoimento.id);
      this.editar(depoimento);
    } else {
      console.log('salvar *** ' + depoimento.id);
      this.salvar(depoimento);
    }
  }

  // exibirOcultar(): boolean{
  //   const depo = localStorage.getItem('depoimento');
  //   // localStorage.removeItem('depoimento');
  //   if(depo == "true"){
  //     localStorage.setItem('depoimento', 'false');
  //     return true;
  //   }else if(depo == "false"){
  //     localStorage.setItem('depoimento', 'true');
      
  //     return false;
  //   }
  // }
}
