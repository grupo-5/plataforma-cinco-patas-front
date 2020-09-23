import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-lista',
  templateUrl: './card-lista.component.html',
  styleUrls: ['./card-lista.component.css']
})
export class CardListaComponent implements OnInit {

  @Input() listElement: string[]; 
  bulletColor: string[] = ["#189CA1", "#FFB800", "#FF4C61", "#77CE32"];

  constructor() { }

  ngOnInit(): void {
  }

}
