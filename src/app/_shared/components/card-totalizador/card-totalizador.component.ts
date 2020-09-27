import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.css']
})
export class CardTotalizadorComponent implements OnInit {

  constructor() { }
  @Input() options : any;

  //  options = 
  //    { name: 'Animais', value: 13, route: '/link', imageUrl: '../../../../assets/images/logo.png', color: 'red', icon: 'fa fa-paw mr-2'};


  ngOnInit(): void {
  }

}
