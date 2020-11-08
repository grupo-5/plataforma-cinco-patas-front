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
  @Input() public selectItems: any;

  // Array de objetos que serao mostrados na listagem (qualquer objeto de qualquer tamanho)
  @Input() public objetosListados: any[] = [{}];

  // variaveis para o filtro funcionar
  public page = 1;
  public pageSize = 4;
  public collectionSize = this.objetosListados.length;
  public _filterBy: string;
  public objetosFiltrados: any[] = [];
  public selectFilteredObj: any[] = [];
  public selectKey: string;

  // implementacao do filtro do select
  public selectedBrand: string;

  constructor() { }

  ngOnInit(): void {
    this.objetosFiltrados = this.objetosListados;
    this.selectFilteredObj = this.objetosListados;
  }
  
  public valueSelected(): void {
    this.selectKey = Object.keys(this.objetosListados[0])[1];
    if(this.selectedBrand != "Todos") {
      this.objetosFiltrados = this.objetosListados.filter(item => item[this.selectKey] === this.selectedBrand);
    } else {
      this.objetosFiltrados = this.objetosListados;
    }
    this.selectFilteredObj = this.objetosFiltrados;
  }

  public selectHeaders(): any {
    return Object.keys(this.selectItems);
  }

  public listarHeaders(): any {
    return Object.keys(this.objetosListados[0]);
  }

  public listarElementos(obj): any {
    return Object.values(obj);
  }

  set filter(value: string) {
    this._filterBy = value;
    this.objetosFiltrados = this.selectFilteredObj.filter((filtro: any) => filtro.Nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) == 0);
  }

  get filter() {
    return this._filterBy;
  }

}