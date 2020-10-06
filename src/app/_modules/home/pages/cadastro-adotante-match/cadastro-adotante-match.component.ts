import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro-adotante-match',
  templateUrl: './cadastro-adotante-match.component.html',
  styleUrls: ['./cadastro-adotante-match.component.css'],
})
export class CadastroAdotanteMatchComponent implements OnInit {
  formCadastroAdotanteMatch: FormGroup;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled=false;

  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criaFormulario()
  }

  criaFormulario = () => {
    this.formCadastroAdotanteMatch = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  };
  trocaRota = (evento) => {
   
    evento.target.innerText=='Voltar'?this.route.navigate(['cadastro-adotante-endereco']):this.route.navigate(['cadastro-adotante-match']);
  };
}
