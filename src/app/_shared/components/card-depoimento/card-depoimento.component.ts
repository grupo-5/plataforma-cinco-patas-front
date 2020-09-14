import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.css']
})
export class CardDepoimentoComponent implements OnInit {

  @Input() nome: string;
  @Input() depoimento: string;

  constructor() { }

  ngOnInit(): void {
  }

}
