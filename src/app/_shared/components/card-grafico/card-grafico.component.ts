import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-grafico',
  templateUrl: './card-grafico.component.html',
  styleUrls: ['./card-grafico.component.css']
})
export class CardGraficoComponent implements OnInit {

  myDoughnutData: Array<any>;
  myDoughnutLabels: Array<any>;
  @Input() titulo: string;
  myListElements: Array<any>;
  myPercentage: Array<any>;
  novo: Array<any>;
  total: number;

  constructor() { }

  ngOnInit(): void {

    this.myDoughnutLabels = ['Adotados', 'Tutelados', 'Aguardando Adoção', 'Disponíveis'];
    this.myDoughnutData = [10, 25, 30, 40];
    this.myListElements =['Adotados', 'Tutelados', 'Aguardando Adoção', 'Disponíveis'];
    this.calcPercentage(this.myDoughnutData);
  }

  calcPercentage(arr: Array<any>): Array<any>{
    this.total = arr.reduce((total, numero) => total + numero, 0);
    this.novo = arr.map(number => (number / 100));
    return this.myPercentage = this.novo.map(number => (number * this.total));
  }
}
