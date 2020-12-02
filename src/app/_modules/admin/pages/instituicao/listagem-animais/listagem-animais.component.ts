import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-animais',
  templateUrl: './listagem-animais.component.html',
  styleUrls: ['./listagem-animais.component.css']
})
export class ListagemAnimaisComponent implements OnInit {
  
  animaisListados: any[] = [];

  constructor(public animalRepository: AnimalRepository) { }

  statusLabels: any = {
    "Adotado": "#FF4C61",
    "Disponível": "#83DB12",
    "Em Adoção": "#009EA3",
    "Tutelado": "#E6A400"
  };
  
  ngOnInit(): void {
    this.carregaAnimais();
  }

  carregaAnimais() {
    this.animalRepository.getAllAnimais().subscribe((resposta) => {
      this.addArray(resposta);
      console.log(resposta);
    });
  }

  addArray(object) {
    let newObject = {
      'Nome': object.nome,
      'Situação': object.status.charAt(0).toUpperCase() + object.status.slice(1),
      'Local': object.localizacao,
      'Contato Responsável': "(" + object.contato.slice(0, 2) + ") " + object.contato.slice(2)
    }
    this.animaisListados.push(newObject);
  }
}
