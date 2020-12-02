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
  @Input() active: string; 
  @Input() nome: string; 
  @Input() contato: string; 
  @Input() endereco: string; 
  @Input() nomeCidade: string; 
  @Input() nomeEstado: string; 
  @Input() justificativa: string; 
  @Input() tipoSolicitacao: string; 
  @Input() situacao: string; 
  @Input() exibirJustificativa: boolean; // Implicará se o texto de justificativa será exiido ou não
  @Input() exibirBotao: boolean; 

  constructor() { }

  ngOnInit(): void {
  }

}
