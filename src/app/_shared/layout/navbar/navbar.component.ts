import { Component, Input, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() options: {}

  options = [
    { name: 'home', route: '/home-page', type: 'link' },
    { name: 'Sobre Nos', route: '/sobre-nos', type: 'link' },
    { name: 'Quero Ajudar', route: '/admin', type: 'link' },
    { name: 'Depoimentos', route: '/depoimentos', type: 'link' },
    { name: 'Instituições Parceiras', route: '/instituicoes-parceiras', type: 'link' },
    { name: 'Login', route: '/instituicao', type: 'button' },

  ];

  constructor() {}

  ngOnInit(): void {}
}
