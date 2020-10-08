import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-adotante',
  templateUrl: './card-adotante.component.html',
  styleUrls: ['./card-adotante.component.css']
})
export class CardAdotanteComponent implements OnInit {

  @Input() caminhoImg: string;
  @Input() nomeBotao: string;
  @Input() listaPassos = ['Pedido', 'Análise', 'Decisão'];

  constructor() { }

  ngOnInit(): void {
  }

}
