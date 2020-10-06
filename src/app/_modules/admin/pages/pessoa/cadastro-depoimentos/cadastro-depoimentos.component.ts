import { Depoimento } from './../../../../../_models/depoimento.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';
import { DepoimentoService } from './../../../../../_services/depoimento.service';


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
    public depoimentoService: DepoimentoService) { }

  ngOnInit(): void {

    this.caminhoImg = "../../../../../assets/images/pessoa.jpg";
    this.nome = "aninha";
    this.depoi = "deposgvdfd eposgvdfd eposgvdfd eposgvdfd eposgvdfd ";
    this.nomeBotao = "Salvar";

    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.depoimentoService.visualizar(this.id).subscribe((depoimento: Depoimento) => this.criarFormulario(depoimento));
    } 
    else {
      this.criarFormulario(this.criarDepoimentoEmBranco());
   }

  }
  private criarFormulario(depoimento: Depoimento): void {
    this.formDepoimento = this.fb.group({
      texto: [depoimento.texto]
    });
  }

  private criarDepoimentoEmBranco(): Depoimento {
    return {} as Depoimento;
  }

  reiniciarForm(): void {
    this.formDepoimento.reset();
  }

  private salvar(depoimento: Depoimento): void {
    this.depoimentoService.salvar(depoimento).subscribe();
  }

  private editar(depoimento: Depoimento): void {
    this.depoimentoService.editar(depoimento).subscribe();
  }

  submit(): void {
    this.formDepoimento.markAllAsTouched();  // Faz parecer que todos os campos foram clicados
    if (this.formDepoimento.invalid) {
      console.log("\n inválido form  ")
      return;
    }

    const depoimento = this.formDepoimento.getRawValue() as Depoimento;  // retorna os campos que existem dentro do formGroup cadastro
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
