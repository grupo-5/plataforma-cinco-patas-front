import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-timeline',
  templateUrl: './card-timeline.component.html',
  styleUrls: ['./card-timeline.component.css'],
})
export class CardTimelineComponent implements OnInit {
  @Input() active = 'Dados Pessoais';
  @Input() listaPassos: Array<String>; 
  constructor() {}

  ngOnInit(): void {}
}
