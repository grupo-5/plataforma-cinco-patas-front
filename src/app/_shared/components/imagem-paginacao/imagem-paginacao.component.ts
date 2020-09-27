import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem-paginacao',
  templateUrl: './imagem-paginacao.component.html',
  styleUrls: ['./imagem-paginacao.component.css'],
})
export class ImagemPaginacaoComponent implements OnInit {
  @Input() list: [];
  page = 1;
  pageSize =20

  constructor() {}

  ngOnInit(): void {}
}
