import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grafico',
  templateUrl: './card-grafico.component.html',
  styleUrls: ['./card-grafico.component.css']
})
export class CardGraficoComponent implements OnInit {

  @Input() myDoughnutData: Array<any>;
  @Input() myDoughnutLabels: Array<any>;
  @Input() titulo: string;
  @Input() myListElements: Array<any>;
  @Input() myPercentage: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
