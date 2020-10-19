
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.css'],
})
export class CardTotalizadorComponent implements OnInit {
  constructor() {}
  @Input() options: any;
  value;

  //  options =
  //    { name: 'Animais', value: 13, route: '/link', imageUrl: '../../../../assets/images/logo.png', color: 'red', icon: 'fa fa-paw mr-2'};

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.value=changes['options'].currentValue

  }
}
