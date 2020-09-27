import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Card totalizador
  myTotalizadorAnimais = { name: 'Animais', value: 80, route: '/link', color: 'green', icon: 'fa fa-paw mr-2' };
  myTotalizadorCapacidade = { name: 'Pessoas', value: 100, route: '/link', color: 'blue', icon: 'fa fa-users' };

  //Card grafico
  labels: Array<any>;
  data: Array<any>;
  labels2: Array<any>;
  data2: Array<any>;
  percentage: Array<any>;
  percentage2: Array<any>;
  elements: Array<any>;
  elements2: Array<any>;
  novo: Array<any>;
  totalAnimais: number;
  capacidadeAnimais = 170; // Esse valor será preenchidos com os dados vindo do back

  // Gráfico barras
  resgatados: Array<number>;
  adotados: Array<number>;
  myBarChartData: Array<any>;
  myBarChartLabels: Array<any>;
  myOptions: { name: 'Animais', value: 13, route: '/link', imageUrl: '../../../../assets/images/logo.png', color: 'red' };


  constructor() { }

  ngOnInit(): void {

    // this.myOptions =
    //   { name: 'Animais', value: 13, route: '/link', imageUrl: '../../../../assets/images/logo.png', color: 'red' };

    this.labels = ['Adotados', 'Tutelados', 'Aguardando Adoção', 'Disponíveis'];
    this.data = [20, 25, 30, 35];
    this.labels2 = ['Tutelado - Lar Temporário', 'Cachorros', 'Gatos', 'Livre'];
    this.data2 = [30, 55, 35, 50];
    this.elements =['Adotados', 'Tutelados', 'Aguardando Adoção', 'Disponíveis'];
    this.elements2 =['Tutelado - Lar Temporário', 'Cachorros', 'Gatos', 'Livre'];
    this.calcPercentageAnimais(this.data);
    this.calcPercentageCapacity(this.data2);

    this.resgatados = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 33, 24];
    this.adotados = [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59];
    this.myBarChartLabels = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    this.myBarChartData = [{ data: this.resgatados, label: 'Resgatados' },
    { data: this.adotados, label: 'Adotados' }
    ];
  }

  private calcPercentageAnimais(arr: Array<any>): Array<any> {
    this.totalAnimais = arr.reduce((total, numero) => total + numero, 0);
    this.novo = arr.map(number => (number / this.totalAnimais));
    return this.percentage = this.novo.map(number => (number * 100).toFixed(2));
  }
  private calcPercentageCapacity(arr: Array<any>): Array<any> {
    this.novo = arr.map(number => (number / this.capacidadeAnimais));
    return this.percentage2 = this.novo.map(number => (number * 100).toFixed(2));
  }

}
