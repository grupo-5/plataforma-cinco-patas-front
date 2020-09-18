import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.css']
})
export class CardTotalizadorComponent implements OnInit {

  constructor() { }
   // @Input() options: {}

   options = 
    { name: 'Animais', value: 13, route: '/link',imageUrl:'../../../../assets/images/logo.png' , color:'red'}
   

  ;


  ngOnInit(): void {
  }

}
