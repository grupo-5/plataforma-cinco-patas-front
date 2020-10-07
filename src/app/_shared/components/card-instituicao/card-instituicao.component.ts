import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-instituicao',
  templateUrl: './card-instituicao.component.html',
  styleUrls: ['./card-instituicao.component.css']
})
export class CardInstituicaoComponent implements OnInit {

  @Input() caminhoImg: string;
  @Input() nomeOng: string;
  @Input() cidadeOng: string;
  constructor() { }

  ngOnInit(): void {
  }

}
