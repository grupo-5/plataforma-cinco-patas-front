import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-instituicoes',
  templateUrl: './lista-instituicoes.component.html',
  styleUrls: ['./lista-instituicoes.component.css']
})
export class ListaInstituicoesComponent implements OnInit {

  formPesquisa: FormGroup;
  // nomeCidade = "Sao carlos - sp";
  // nome = "Instituição Apoiadora de animais";
  // caminho = "./../../../../../assets/images/dog-2.jpg";

  lista: any[] = [
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    },
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    },
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    },
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    },
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    },
    {
      "nome": "Instituição Apoiadora de animais",
      "nomeCidade": "Sao carlos - sp",
      "caminho": "./../../../../../assets/images/dog-2.jpg",
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formPesquisa = this.fb.group({
      cidade: [''],
      estado: [''],
    })
  }

}
