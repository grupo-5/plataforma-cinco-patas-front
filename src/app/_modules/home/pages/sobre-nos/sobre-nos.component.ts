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
    this.texto2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ducimus mollitia atque labore omnis nostrum asperiores odit vitae accusamus natus! Pariatur est iusto repellendus hic eligendi quae vero molestias quos!"
    this.texto1="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum ducimus mollitia atque labore omnis nostrum asperiores odit vitae accusamus natus! Pariatur est iusto repellendus hic eligendi quae vero molestias quos!"
    this.caminho = "./../../../../../assets/images/dog-2.jpg";
  }

}
