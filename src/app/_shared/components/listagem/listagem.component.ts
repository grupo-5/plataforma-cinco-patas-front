import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  // Rota do botao adicionar
  @Input() public rLink: string;

  // Categorias que ficarao no select e suas cores
  @Input() public selectItems: any = {
    "Tutor": "blue", 
    "Adotante": "yellow", 
    "Responsavel": "green"
  };

  // Array de objetos que serao mostrados na listagem (qualquer objeto de qualquer tamanho)
  @Input() public objetosListados: any[] = [
    {
      "Nome": "João",
      "Situacao": "Adotante",
      "Idade": 14,
      "Cor": "verde"
    },
    {
     "Nome": "Roberto",
      "Situacao": "Tutor",
      "Idade": 18,
      "Cor": "verde"
    },
    {
      "Nome": "Junior",
      "Situacao": "Responsavel",
      "Idade": 27,
      "Cor": "verde"
    }
  ];

  // variaveis para o filtro funcionar
  page = 1;
  pageSize = 4;
  collectionSize = this.objetosListados.length;
  _filterBy: string;
  objetosFiltrados: any[];
  selectFilteredObj: any[];
  selectKey: string = Object.keys(this.objetosListados[0])[1];

  // implementacao do filtro do select
  public selectedBrand: string;
  public valueSelected() {
    if(this.selectedBrand != "Todos") {
      this.objetosFiltrados = this.objetosListados.filter(item => item[this.selectKey] === this.selectedBrand);
    } else {
      this.objetosFiltrados = this.objetosListados;
    }
    this.selectFilteredObj = this.objetosFiltrados;
  }

  selectHeaders() {
    return Object.keys(this.selectItems);
  }

  listarHeaders() {
    return Object.keys(this.objetosListados[0]);
  }

  listarElementos(obj) {
    return Object.values(obj);
  }

  set filter(value: string) {
    this._filterBy = value;
    this.objetosFiltrados = this.selectFilteredObj.filter((filtro: any) => filtro.Nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) == 0);
  }

  get filter() {
    return this._filterBy;
  }

  constructor() { }

  ngOnInit(): void {
    this.objetosFiltrados = this.objetosListados;
    this.selectFilteredObj = this.objetosListados;
  }

}