import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  caminho: string;
  texto1:string;
  texto2:string;

  constructor() { }

  ngOnInit(): void {
    this.texto2 ="A história da Cinco Patas começa inspirada pelas vidas de animais e pessoas transformadas após a realização de adoções, trazendo para o processo uma revolução digital, que facilita a integração de ambas as partes, e corrobora para que mais patinhas encontrem seus lares!"
    this.texto1 ="Somos uma equipe multidisciplinar, com membros distribuídos em três estados. Nosso objetivo foi desenvolver uma plataforma que gerasse valor na vida das pessoas!"
    this.caminho = "./../../../../../assets/images/logo.png";
  }

}
