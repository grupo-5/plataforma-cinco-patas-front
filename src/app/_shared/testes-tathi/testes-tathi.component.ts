import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testes-tathi',
  templateUrl: './testes-tathi.component.html',
  styleUrls: ['./testes-tathi.component.css']
})
export class TestesTathiComponent implements OnInit {

  // Depoimentos
  caminhoImg: string;
  nome: string;
  depoi: string;

  // Gráfico barras
  resgatados: Array<number>;
  adotados: Array<number>;
  meuBarChartData: Array<any>;
  meuBarChartLabels: Array<any>;

  constructor() { }

  ngOnInit(): void {

    this.caminhoImg = "../../../../../assets/images/pessoa.jpg";
    this.nome = "aninha";
    this.depoi = "deposgvdfd eposgvdfd eposgvdfd eposgvdfd eposgvdfd ";

    this.resgatados = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 33, 24];
    this.adotados = [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59];

    this.meuBarChartLabels = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    this.meuBarChartData = [{ data: this.resgatados, label: 'Resgatados' },
    { data: this.adotados, label: 'Adotados' }
    ];
  
  }

}
