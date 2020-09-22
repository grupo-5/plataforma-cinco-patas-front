import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.css']
})
export class CardDepoimentoComponent implements OnInit {

  @Input() nome: string;
  @Input() depoimento: string;
  @Input() caminhoImgCard: string;

  // faCoffee = faCoffee;
  @Input() nomeIcon1: string;
  @Input() nomeIcon2: string;

  constructor() { }

  ngOnInit(): void {
  }

}
