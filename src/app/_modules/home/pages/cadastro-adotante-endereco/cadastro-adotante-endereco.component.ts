import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-adotante-endereco',
  templateUrl: './cadastro-adotante-endereco.component.html',
  styleUrls: ['./cadastro-adotante-endereco.component.css'],
})
export class CadastroAdotanteEnderecoComponent implements OnInit {
  formCadastroAdotanteEndereco: FormGroup;
  listSexo = ['Feminino', 'Masculino', 'Nao declarar'];
  listaPassos = [
    'Dados Pessoais',
    'Endereco',
    'Match',
    'Algo Mais',
    'Mais Alguma coisa',
  ];
  disabled: boolean = false;
  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criarFormulario()
  }
  criarFormulario = () => {
    this.formCadastroAdotanteEndereco = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  };

  trocarRota = (evento) => {
    this.route.navigate(['cadastro-adotante-endereco']);
  };
}
