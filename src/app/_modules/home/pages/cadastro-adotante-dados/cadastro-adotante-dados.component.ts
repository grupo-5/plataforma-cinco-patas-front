import { PessoaDataService } from './../../../../_services/pessoa-data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
  EmailValidator,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PessoaModel } from 'src/app/_core/model/pessoa-model';

@Component({
  selector: 'app-cadastro-adotante-dados',
  templateUrl: './cadastro-adotante-dados.component.html',
  styleUrls: ['./cadastro-adotante-dados.component.css'],
})
export class CadastroAdotanteDadosComponent implements OnInit {
  formCadastroAdotante: FormGroup;
  listSexo = ['Feminino', 'Masculino', 'Nao declarar'];
  listaPassos = ['Dados Pessoais', 'Endereço', 'Upload de Imagem'];
  disabled: boolean = false;
  id: number;

  constructor(private fb: FormBuilder, private route: Router, public pessoaDataService: PessoaDataService) {}

  ngOnInit(): void {
    this.criaFormulario();
  }

  criaFormulario = () => {
    this.formCadastroAdotante = this.fb.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      rg: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contato: ['', Validators.required],
      sexo: ['', Validators.required],
    });
  };

  validar = () => {
    this.formCadastroAdotante.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    if (this.formCadastroAdotante.invalid) {
      console.log('\n inválido form  ');
      return;
    }

    const adotante = this.formCadastroAdotante.getRawValue() as PessoaModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      adotante.id = this.id;
      console.log('editar *** ' + adotante.nome);
      // this.editar(adotante);
    } else {
      console.log('salvar *** ' + adotante.nome);
      this.salvar(adotante);
    }
  };

  private salvar = (adotante: PessoaModel) => {
    this.pessoaDataService.changeMessage(JSON.stringify(adotante));
    this.trocaRota();
  };

  resetForm(): void {
    this.formCadastroAdotante.reset();
  }

  trocaRota = (evento?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.route.navigate(['cadastro-adotante-1'])
        : this.route.navigate(['cadastro-adotante-2']);
    } else {
      this.route.navigate(['cadastro-adotante-2']);
    }
  };
}
