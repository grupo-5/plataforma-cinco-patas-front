import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-imagem-paginacao',
  templateUrl: './imagem-paginacao.component.html',
  styleUrls: ['./imagem-paginacao.component.css'],
})
export class ImagemPaginacaoComponent implements OnInit {
  @Input() list;
  page = 1;
  pageSize = 15;
  actualList = [];
  @Output() animalAdocaoData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.isFirstChange) {
      this.actualList = changes['list'].currentValue;
    }
  }
  selectedAnimal(item) {
    this.animalAdocaoData.emit(item);
  }
}
