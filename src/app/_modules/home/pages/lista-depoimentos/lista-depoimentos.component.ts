import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-depoimentos',
  templateUrl: './lista-depoimentos.component.html',
  styleUrls: ['./lista-depoimentos.component.css']
})
export class ListaDepoimentosComponent implements OnInit {
 // Depoimentos
 caminhoImg: string;
 nome: string;
 depoi: string;
 nomeBotao: string;
 
  

  constructor() { }

  ngOnInit(): void {

    this.caminhoImg = "../../../../../assets/images/pessoa.jpg";
    this.nome = "aninha";
    this.depoi = "deposgvdfd eposgvdfd eposgvdfd eposgvdfd eposgvdfd ";
    this.nomeBotao = "Salvar"
  }


}
