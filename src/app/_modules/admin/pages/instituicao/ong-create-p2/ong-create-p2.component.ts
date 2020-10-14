import { InstituicaoRepository } from './../../../../../instituicao/repository/instituicao-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from 'src/app/instituicao/model/instituicao-model';

@Component({
  selector: 'app-ong-create-p2',
  templateUrl: './ong-create-p2.component.html',
  styleUrls: ['./ong-create-p2.component.css']
})
export class OngCreateP2Component implements OnInit {
  listaPassos = ['Dados', 'Endereço'];

  id: number;
  formCadastro: FormGroup;

  // Provavelmente ocorrerá mudanças nessa classe
  constructor(public ongService: InstituicaoRepository,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.params['id'];
    // if (this.id) {
    //   this.ongService.visualizar(this.id).subscribe((ong: Ong) => this.criarFormulario(ong));
    // }
    // else {
    //   this.criarFormulario(this.criarOngEmBranco());
    // }
  }

  private criarFormulario(ong: InstituicaoModel): void {
    this.formCadastro = this.fb.group({
      enderecoLogradouro: [ong.endereco.logradouro, [Validators.required]],
      enderecoCidade: [ong.endereco.cidade, [Validators.required]],
      enderecoEstado: [ong.endereco.cidade.estado, [Validators.required]],
      enderecoNumero: [ong.endereco.numero, [Validators.required]],
      enderecoComplemento: [ong.endereco.complemento, [Validators.required]],
      enderecoCep: [ong.endereco.cep, [Validators.required]],
    });
  }

  private criarOngEmBranco(): InstituicaoModel {
    return {} as InstituicaoModel;
  }

}
