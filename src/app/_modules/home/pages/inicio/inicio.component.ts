import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  searchResult = [{ imgUrl: '../../../../assets/images/cat-1.jpg' }];

  formBuscaHome: FormGroup;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled = false;
  listaEspecie = ['Dados Pessoais', 'Endereco', 'Match'];
  listaEstado = ['Dados Pessoais', 'Endereco', 'Match'];
  listaCidade = ['Dados Pessoais', 'Endereco', 'Match'];
  listaPorte = ['Dados Pessoais', 'Endereco', 'Match'];
  
  

  constructor(private route: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.criaFormulario();

    for (let i = 1; i < 50; i++) {
      this.searchResult.push({ imgUrl: '../../../../assets/images/cat-1.jpg' });
    }
  }

  criaFormulario = () => {
    this.formBuscaHome = this.fb.group({
      especie: [''],
      porte: [''],
      estado: [''],
      cidade: [''],
     
    });
  };

  botoesAcoes = (evento) => {
    evento.target.innerText == 'Buscar'
      ? this.route.navigate(['cadastro-adotante-endereco'])
      : this.route.navigate(['cadastro-adotante-match']);
  };
}
