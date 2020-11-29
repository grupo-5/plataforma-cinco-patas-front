import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lista',
  templateUrl: './card-lista.component.html',
  styleUrls: ['./card-lista.component.css']
})
export class CardListaComponent implements OnInit {

  @Input() listElement: string[]; 
  @Input() numberAnimals: Array<any>;
  @Input() percentage: Array<any>;
  bulletColor: string[] = 
    ['rgba(255, 76, 97, 1)',
    'rgba(255, 184, 0, 1)',
    'rgba(119, 206, 50, 1)',
    'rgba(24, 156, 161, 1)'];

  constructor() { }

  ngOnInit(): void {
  }

}
