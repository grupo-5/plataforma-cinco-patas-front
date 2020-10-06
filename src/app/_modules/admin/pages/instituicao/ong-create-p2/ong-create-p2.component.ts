import { Ong } from './../../../../../_models/ong.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';
import { OngService } from './../../../../../_services/ong.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong-create-p2',
  templateUrl: './ong-create-p2.component.html',
  styleUrls: ['./ong-create-p2.component.css']
})
export class OngCreateP2Component implements OnInit {
  id: number;
  formCadastro: FormGroup;

  // Provavelmente ocorrerá mudanças nessa classe
  constructor(public ongService: OngService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.ongService.visualizar(this.id).subscribe((ong: Ong) => this.criarFormulario(ong));
    }
    else {
      this.criarFormulario(this.criarOngEmBranco());
    }
  }

  private criarFormulario(ong: Ong): void {
    this.formCadastro = this.fb.group({
      enderecoLogradouro: [ong.enderecoLogradouro, [Validators.required]],
      enderecoCidade: [ong.enderecoCidade, [Validators.required]],
      enderecoEstado: [ong.enderecoEstado, [Validators.required]],
      enderecoNumero: [ong.enderecoNumero, [Validators.required]],
      enderecoComplemento: [ong.enderecoComplemento, [Validators.required]],
      enderecoCep: [ong.enderecoCep, [Validators.required]],
    });
  }

  private criarOngEmBranco(): Ong {
    return {} as Ong;
  }

}
