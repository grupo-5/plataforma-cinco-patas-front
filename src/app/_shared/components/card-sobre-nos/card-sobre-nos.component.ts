import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-sobre-nos',
  templateUrl: './card-sobre-nos.component.html',
  styleUrls: ['./card-sobre-nos.component.css']
})
export class CardSobreNosComponent implements OnInit {

  @Input() texto: string;
  @Input() titulo: string;
  @Input() caminhoImg: string;

  constructor() { }

  ngOnInit(): void {
  }

}
 