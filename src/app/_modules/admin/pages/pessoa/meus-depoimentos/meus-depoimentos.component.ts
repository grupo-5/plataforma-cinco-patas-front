import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-depoimentos',
  templateUrl: './meus-depoimentos.component.html',
  styleUrls: ['./meus-depoimentos.component.css']
})
export class MeusDepoimentosComponent implements OnInit {

  caminhoImg: string;
  nome: string;
  depoi: string;

  constructor() { }

  ngOnInit(): void {
    this.caminhoImg = '../../../../../assets/images/t.jpg';
    this.nome = 'Tathiane';
    this.depoi = 'A ong que cuidou do processo de adoção do tob, foi muito atenciosa.';
  }

}
