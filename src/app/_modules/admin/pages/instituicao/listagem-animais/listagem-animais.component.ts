import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {

  constructor(public animalRepository: AnimalRepository) { }

  statusLabels: any = {
    "Adotado": "#189CA1",
    "Disponível": "#77CE32",
    "Em processo de Adoção": "#FF4C61"
  };

  animaisListados: any[] = [];

  carregaSolicitacoes() {
    this.animalRepository.getAllAnimais().subscribe((resposta) => {
      this.addArray(resposta);
      console.log(resposta);
    });
  }

  addArray(object) {
    this.animaisListados.push(object);
  }

  ngOnInit(): void {
    this.carregaSolicitacoes();
  }

}
