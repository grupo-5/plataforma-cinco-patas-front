import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css']
})
export class SobreNosComponent implements OnInit {

  caminho: string;

  constructor() { }

  ngOnInit(): void {
    this.caminho = "./../../../../../assets/images/dog-2.jpg";
  }

}
