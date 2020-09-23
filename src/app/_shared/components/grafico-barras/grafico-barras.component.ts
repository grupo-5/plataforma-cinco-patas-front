import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
  styleUrls: ['./grafico-barras.component.css']
})
export class GraficoBarrasComponent implements OnInit {

  // resgatados: Array<number>;
  // adotados: Array<number>;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() public barChartLabels: Label[]; // = ['Jan','Feb','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColor: Color[] = [{ backgroundColor: '#6F52ED'}, {backgroundColor: '#FF7A00'}];
  @Input() public barChartData: ChartDataSets[];

  // public barChartData: ChartDataSets[] = [
  //   { data: [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59], label: 'Resgatados'},
  //   { data: [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59,], label: 'Adotados' }
  // ];

  constructor() { }

  ngOnInit(): void {
    // this.resgatados = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 33, 24];
    // this.adotados = [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59];

    // this.barChartData = [{ data: this.resgatados, label: 'Resgatados' },
    //                      { data: this.adotados, label: 'Adotados' }
    //                     ];
  }
}
