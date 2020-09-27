import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  searchResult = [{ imgUrl: '../../../../assets/images/cat-1.jpg' }
  
];

  constructor() {}

  ngOnInit(): void {



   for(let i=1; i<50;i++){

this.searchResult.push({ imgUrl: '../../../../assets/images/cat-1.jpg' })}
  }
}
