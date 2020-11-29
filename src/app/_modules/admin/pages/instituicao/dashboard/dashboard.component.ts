import { AuthService } from './../../../../home/pages/seguranca/auth.service';
import { PessoaRepository } from './../../../../../_core/repository/pessoa-repository';
import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  //Card grafico
  labels: Array<any>;
  data: Array<any> = [];
  labels2: Array<any>;
  data2: Array<any> = [];
  percentage: Array<any>;
  percentage2: Array<any>;
  elements: Array<any>;
  elements2: Array<any>;
  novoAnimais: Array<any>;
  novoCapacidade: Array<any>;
  totalAnimais: number;
  capacidadeAnimais = 170;
  animaisTamanho: any = [];
  pessoasTamanho: any = [];
  arrNumeroAnimais: Array<number> = [];
  animais: any = [];

  //Card totalizador
  myTotalizadorAnimais = {
    name: 'Animais',
    value: 0,
    route: '/link',
    color: 'green',
    icon: 'fa fa-paw mr-2',
  };
  myTotalizadorPessoas = {
    name: 'Pessoas',
    value: 0,
    route: '/link',
    color: 'blue',
    icon: 'fa fa-users',
  };

  // Gráfico barras
  resgatados: Array<number>;
  adotados: Array<number>;
  myBarChartData: Array<any> = [];
  myBarChartLabels: Array<any>;

  constructor(
    public animalRepository: AnimalRepository,
    public pessoaRepository: PessoaRepository,
    public logoutRepository: AuthService
  ) { }


  ngOnInit(): void {
    this.loadAnimal();
    this.loadPessoas();

    this.labels = ['Adotados', 'Tutelados', 'Disponíveis', 'Adoção em Andamento'];
    this.labels2 = ['Livre', 'Gatos', 'Cachorros', 'Lar Temporário'];
    this.data2 = [30, 55, 35, 50];
    this.elements = ['Adotados', 'Tutelados', 'Disponíveis', 'Adoção em Andamento'];
    this.elements2 = ['Livre', 'Gatos', 'Cachorros', 'Lar Temporário'];
    this.calcPercentageCapacity(this.data2);

    this.resgatados = [65, 59, 80, 81, 56, 65, 59, 80, 81, 56, 33, 24];
    this.adotados = [28, 48, 40, 19, 86, 65, 59, 80, 81, 56, 65, 59];
    this.myBarChartLabels = [
      'Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',];
    this.myBarChartData = [
      { data: this.resgatados, label: 'Resgatados' },
      { data: this.adotados, label: 'Adotados' },
    ];
  }

  private calcPercentageAnimais(arr: Array<any>): Array<any> {
    this.totalAnimais = arr.reduce((total, numero) => total + numero, 0);
    if (this.totalAnimais == 0){
      this.novoAnimais = arr.map((number) => number / 1);
    }else{
      this.novoAnimais = arr.map((number) => number / this.totalAnimais);
    }
    return (this.percentage = this.novoAnimais.map((number) =>
      (number * 100).toFixed(2)
    ));
  }

  private calcPercentageCapacity(arr: Array<any>): Array<any> {
    this.novoCapacidade = arr.map((number) => number / this.capacidadeAnimais);
    return (this.percentage2 = this.novoCapacidade.map((number) =>
      (number * 100).toFixed(2)
    ));
  }

  loadAnimal() {
    this.animalRepository.getAnimaisInstituicao().then((resposta) => {
      this.animaisTamanho = resposta;
      this.myTotalizadorAnimais.value = this.animaisTamanho.length;
      this.carregaDadosGráficoRosquinhaAnimal(resposta);
    });
  }

  loadPessoas() {
    this.pessoaRepository.getPessoasInstituicao().then((resposta) => {
      this.pessoasTamanho = resposta;
      this.myTotalizadorPessoas.value = this.pessoasTamanho.length;
    });
  }

  carregaDadosGráficoRosquinhaAnimal(res) {
    this.animais = res;
    let adotado = 0;
    let disponivel = 0;
    let tutelado = 0;
    let emAdocao = 0;

    this.animais.forEach(element => {
      if (element.status == "Adotado") {
        adotado += 1;
      } else if (element.status == "Tutelado") {
        tutelado += 1;
      } else if (element.status == "Disponível") {
        disponivel += 1;
      } else if (element.status == "EmAdocao") {
        emAdocao += 1;
      } 
    });

    this.data.push(adotado);
    this.data.push(tutelado);
    this.data.push(disponivel);
    this.data.push(emAdocao);
    this.calcPercentageAnimais(this.data);
  }

  deslogar() {
    this.logoutRepository.logout()
  }
}
