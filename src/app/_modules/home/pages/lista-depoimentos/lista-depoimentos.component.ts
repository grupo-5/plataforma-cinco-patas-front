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
 caminhoImg2: string;
 nome2: string;
 depoi2: string;
 nomeBotao: string;
 
  constructor() { }

  ngOnInit(): void {

    this.caminhoImg = "../../../../../assets/images/pessoa.jpg";
    this.nome = "Julia";
    this.depoi = "Tive uma experiência muito legal utilizando essa plataforma para adotar meu bixinho.";
    this.caminhoImg2 = "../../../../../assets/images/t.jpg";
    this.nome2 = "Tathiane";
    this.depoi2 = "A ong que cuidou do processo de adoção do tob, foi muito atenciosa.";
    this.nomeBotao = "Salvar"
  }


}
