import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem-paginacao',
  templateUrl: './imagem-paginacao.component.html',
  styleUrls: ['./imagem-paginacao.component.css'],
})
export class ImagemPaginacaoComponent implements OnInit {
  @Input() list: [];
  page = 1;
  pageSize =1;

  constructor() {}

  ngOnInit(): void {}
}
