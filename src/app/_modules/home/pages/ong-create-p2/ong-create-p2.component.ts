import { InstituicaoModel } from './../../../../_core/model/instituicao-model';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../_services/validar-inputs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


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
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      // this.ongService.visualizar(this.id).subscribe((ong: Ong) => this.criarFormulario(ong));
    }
    else {
      this.criarFormulario(this.criarOngEmBranco());
    }

  }

  private criarFormulario(ong: InstituicaoModel): void {
    this.formCadastro = this.fb.group({
      enderecoLogradouro: ['', [Validators.required]],
      enderecoCidade: ['', [Validators.required]],
      enderecoEstado: ['', [Validators.required]],
      enderecoNumero: ['', [Validators.required]],
      enderecoComplemento: ['', [Validators.required]],
      enderecoCep: ['', [Validators.required]],
    });
  }

  private criarOngEmBranco(): InstituicaoModel {
    return {} as InstituicaoModel;
  }

}
