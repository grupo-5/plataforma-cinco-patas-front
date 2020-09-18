import { Component, Input, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // @Input() options: {}

  options = [
    { name: 'home', route: '/admin', type: 'link' },
    { name: 'Sobre Nos', route: '/admin', type: 'link' },
    { name: 'Quero Ajudar', route: '/admin', type: 'link' },
    { name: 'Depoimentos', route: '/admin', type: 'link' },
    { name: 'Ongs Parceiras', route: '/admin', type: 'link' },
    { name: 'Login', route: '/admin', type: 'button' },

  ];

  constructor() {}

  ngOnInit(): void {}
}
