import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Jan','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColor: Color[] = [{ backgroundColor: '#6F52ED'}, {backgroundColor: '#FF7A00'}];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 33, 24], label: 'Resgatados'},
    { data: [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59,], label: 'Adotados' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
