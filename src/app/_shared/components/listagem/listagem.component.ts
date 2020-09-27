import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  
  @Input() public dropFilter: string[] = ["Tutores", "Adotantes", "Responsaveis"];
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

  page = 1;
  pageSize = 4;
  collectionSize = this.objetosListados.length;
  _filterBy: string;
  objetosFiltrados: any[];

  listarHeaders() {
    return Object.keys(this.objetosListados[0]);
  }

  listarElementos(obj) {
    return Object.values(obj);
  }

  set filter(value: string) {
    this._filterBy = value;

    this.objetosFiltrados = this.objetosListados.filter((filtro: any) => filtro.Nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1);
  }

  get filter() {
    return this._filterBy;
  }

  constructor() { }

  ngOnInit(): void {
    this.objetosFiltrados = this.objetosListados;
  }

}
