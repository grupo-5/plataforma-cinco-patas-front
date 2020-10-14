import { InstituicaoRepository } from './../../../../../instituicao/repository/instituicao-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from 'src/app/instituicao/model/instituicao-model';

@Component({
  selector: 'app-ong-create',
  templateUrl: './ong-create.component.html',
  styleUrls: ['./ong-create.component.css']
})
export class OngCreateComponent implements OnInit {
  id: number;
  formCadastro: FormGroup;
  razaoSocial: String;
  nome: String;
  tipodeDocumento: Array<String>;
  numerodoDocumento: Array<String>;
  inscricaoEstadual: Array<String>;
  email: Array<String>;
  capacidade: Array<number>;
  cidades: Array<String>;
  banco: Array<String>;
  agencia: Array<String>;
  conta: Array<String>;
 
  constructor(public ongService: InstituicaoRepository,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public validarInputsService: ValidarInputsService
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      // this.ongService.visualizar(this.id).subscribe((ong: Ong) => this.criarFormulario(ong));
    }
    else {
      this.criarFormulario(this.criarOngEmBranco());
    }
    this.id = this.activatedRoute.snapshot.params['id'];
    this.cidades = ['','São Paulo', 'Rio de Janeiro', 'Goias'];
    this.tipodeDocumento = ['','CNPJ', 'RG', 'CPF'];
    
  }



  private criarFormulario(ong: InstituicaoModel): void {
    this.formCadastro = this.fb.group({
      nome: [ong.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      razaoSocial: [ong.razaoSocial, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      tipoDeDocumento: [ong.tipoDeDocumento, [Validators.required]],
      numeroDoDocumento: [ong.numeroDoDocumento, [Validators.required]],
      inscricaoEstadual: [ong.inscricaoEstadual, [Validators.required]],
      email: [ong.email, [Validators.required]],
      capacidade: [ong.capacidade, [Validators.required]],
      banco: [ong.banco, [Validators.required]],
      agencia: [ong.agencia, [Validators.required]],
      conta: [ong.conta],
    });
  }

  private criarOngEmBranco(): InstituicaoModel {
    return {} as InstituicaoModel;
  }

  private editar(ong: InstituicaoModel): void {
    // this.ongService.editar(ong).subscribe();
  }
  private salvar(ong: InstituicaoModel): void {
    // this.ongService.salvar(ong).subscribe();
  }

  submit(): void {
    this.formCadastro.markAllAsTouched();  
    if (this.formCadastro.invalid) {
      console.log("\n inválido form  ")
      return;
    }

    const ong = this.formCadastro.getRawValue() as InstituicaoModel;  // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      ong.id = this.id;
      console.log("editar *** " + ong.nome)
      this.editar(ong);
    }
     else {
      console.log("salvar *** " + ong.nome)
      this.salvar(ong);
    }
  }

  reiniciarForm(): void {
    this.formCadastro.reset();
  }

}
