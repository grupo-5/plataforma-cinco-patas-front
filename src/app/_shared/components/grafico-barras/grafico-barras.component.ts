import { Component, OnInit, Input } from '@angular/core';
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
  @Input() public barChartLabels: Label[]; 
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColor: Color[] = [{ backgroundColor: '#6F52ED'}, {backgroundColor: '#FF7A00'}];
  @Input() public barChartData: ChartDataSets[];

  constructor() { }

  ngOnInit(): void {
  }
}
