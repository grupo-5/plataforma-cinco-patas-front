import { DepoimentoModel } from './../../../../../depoimento/model/depoimento-model';
import { DepoimentoRepository } from './../../../../../depoimento/repository/depoimento-repository';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';



@Component({
  selector: 'app-cadastro-depoimentos',
  templateUrl: './cadastro-depoimentos.component.html',
  styleUrls: ['./cadastro-depoimentos.component.css']
})
export class CadastroDepoimentosComponent implements OnInit {

  // Depoimentos
  caminhoImg: string;
  nome: string;
  depoi: string;
  nomeBotao: string;
  formDepoimento: FormGroup;
  texto: string;
  id: number;

  constructor(public validarInputsService: ValidarInputsService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public depoimentoService: DepoimentoRepository) { }

  ngOnInit(): void {

    this.caminhoImg = "../../../../../assets/images/pessoa.jpg";
    this.nome = "aninha";
    this.depoi = "deposgvdfd eposgvdfd eposgvdfd eposgvdfd eposgvdfd ";
    this.nomeBotao = "Salvar";

    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      // this.depoimentoService.visualizar(this.id).subscribe((depoimento: DepoimentoModel) => this.criarFormulario(depoimento));
    } 
    else {
      this.criarFormulario(this.criarDepoimentoEmBranco());
   }

  }
  private criarFormulario(depoimento: DepoimentoModel): void {
    this.formDepoimento = this.fb.group({
      texto: [depoimento.texto]
    });
  }

  private criarDepoimentoEmBranco(): DepoimentoModel {
    return {} as DepoimentoModel;
  }

  reiniciarForm(): void {
    this.formDepoimento.reset();
  }

  private salvar(depoimento: DepoimentoModel): void {
    // this.depoimentoService.salvar(depoimento).subscribe();
  }

  private editar(depoimento: DepoimentoModel): void {
    // this.depoimentoService.editar(depoimento).subscribe();
  }

  submit(): void {
    this.formDepoimento.markAllAsTouched();  // Faz parecer que todos os campos foram clicados
    if (this.formDepoimento.invalid) {
      console.log("\n inválido form  ")
      return;
    }

    const depoimento = this.formDepoimento.getRawValue() as DepoimentoModel;  // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      depoimento.id = this.id;
      console.log("editar *** " + depoimento.id)
      this.editar(depoimento);
    }
     else {
      console.log("salvar *** " + depoimento.id)
      this.salvar(depoimento);
    }
  }

}
