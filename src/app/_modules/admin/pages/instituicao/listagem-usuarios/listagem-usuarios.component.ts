import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {

  personLabel: any = {
    "Tutor": "#189CA1",
    "Adotante": "#77CE32",
    "Responsável": "#FF4C61"
  };

  usuariosListados: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
