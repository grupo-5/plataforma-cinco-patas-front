import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-adotante-dados',
  templateUrl: './cadastro-adotante-dados.component.html',
  styleUrls: ['./cadastro-adotante-dados.component.css'],
})
export class CadastroAdotanteDadosComponent implements OnInit {
  formCadastroAdotante: FormGroup;
  listSexo = ['Feminino', 'Masculino', 'Nao declarar'];
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled: boolean = false;

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit(): void {
    this.criaFormulario();
  }

  criaFormulario = () => {
    this.formCadastroAdotante = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  };

  trocaRota = (evento) => {
    this.route.navigate(['cadastro-adotante-endereco']);
  };
}
