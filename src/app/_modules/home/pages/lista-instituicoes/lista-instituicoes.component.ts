import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-instituicoes',
  templateUrl: './lista-instituicoes.component.html',
  styleUrls: ['./lista-instituicoes.component.css']
})
export class ListaInstituicoesComponent implements OnInit {

  formPesquisa: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formPesquisa = this.fb.group({
      cidade: [''],
      estado: [''],
    })
  }

}
