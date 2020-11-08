import { InstituicaoDataService } from './../../../../_services/instituicao-data.service';
import { InstituicaoModel } from './../../../../_core//model/instituicao-model';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';

import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../_services/validar-inputs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ong-create',
  templateUrl: './ong-create.component.html',
  styleUrls: ['./ong-create.component.css']
})
export class OngCreateComponent implements OnInit {
  //timeline
  listaPassos = ['Dados', 'Endereço', 'Segurança', 'Foto'];

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
    public validarInputsService: ValidarInputsService,
    public instituicaoDataService: InstituicaoDataService
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
    this.tipodeDocumento = ['CNPJ', 'RG', 'CPF'];
    
  }



  private criarFormulario(ong: InstituicaoModel): void {
    this.formCadastro = this.fb.group({
      nome: [ong.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      razaoSocial: [ong.razaoSocial, [Validators.minLength(3), Validators.maxLength(100)]],
      tipoDocumento: [ong.tipoDocumento, [Validators.required]],
      numeroDocumento: [ong.numeroDocumento, [Validators.required]],
      inscricaoEstadual: [ong.inscricaoEstadual, ],
      email: [ong.email, [Validators.required, Validators.email]],
      capacidade: [ong.capacidade, [Validators.required]],
      banco: [ong.banco],
      agencia: [ong.agencia],
      conta: [ong.conta],
      contato: [ong.contato, [Validators.required]],
    });
    
  }

  private criarOngEmBranco(): InstituicaoModel {
    return {} as InstituicaoModel;
  }

  private editar(ong: InstituicaoModel): void {
    // this.ongService.editar(ong).subscribe();
  }

  private salvar(ong: InstituicaoModel): void {
    this.instituicaoDataService.changeMessage(JSON.stringify(ong));
    this.trocaRota();
  }

  trocaRota = (evento?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.router.navigate(['selecao-tipo-cadastro'])
        : this.router.navigate(['cadastro-instituicao-1']);
    } else {
      this.router.navigate(['cadastro-instituicao-1']);
    }
  };
  

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
