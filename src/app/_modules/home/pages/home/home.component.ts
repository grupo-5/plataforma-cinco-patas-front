import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaAnimais=[
  {name:'auaua', imgUrl:'./assets/images/pessoa.jpg'},
  {name:'uauaua', imgUrl:'./assets/images/logo.png'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
