import { Component, Input, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() options: any

  options = [
    { name: 'home', route: '', type: 'link' },
    { name: 'Sobre Nos', route: '/sobre-nos', type: 'link' },
    { name: 'Depoimentos', route: '/depoimentos', type: 'link' },
    { name: 'Instituições Parceiras', route: '/instituicoes-parceiras', type: 'link' },
    { name: 'Login', route: '/instituicao', type: 'button' },

  ];

  constructor() {}

  ngOnInit(): void {}
}
