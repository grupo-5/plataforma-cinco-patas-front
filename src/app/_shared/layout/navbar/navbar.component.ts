import { Router } from '@angular/router';
import { AuthService } from './../../../_modules/home/pages/seguranca/auth.service';
import { Component, Input, OnInit, NgModule, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() ambiente: any
  public options = []

  optionsOpen = [
    { name: 'home', route: '', type: 'link' },
    { name: 'Sobre Nos', route: '/sobre-nos', type: 'link' },
    { name: 'Depoimentos', route: '/depoimentos', type: 'link' },
    { name: 'Instituições Parceiras', route: '/instituicoes-parceiras', type: 'link' },
    { name: 'Login', route: '/instituicao', type: 'button' },

  ];

  optionsLogadoOng = [
    // { name: 'Notificacoes', route: '/instituicoes-parceiras', type: 'link' },
    // { name: '', route: '/instituicoes-parceiras', type: 'dropdown' },
    { name: 'Logout', route: '/logout', type: 'button' },


  ];
  optionsLogadoUser = [
    { name: 'Notificacoes', route: '/instituicoes-parceiras', type: 'link' },
    // { name: '', route: '/instituicoes-parceiras', type: 'dropdown' },
    { name: 'Logout', route: '/logout', type: 'button' },


  ];



  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.isFirstChange) {

      console.log(this.ambiente)
      if (this.ambiente == "logadoOng") {
        this.options = this.optionsLogadoOng
      }
      else if (this.ambiente == "logadoUser") {
        this.options = this.optionsLogadoOng
      }
      else {
        this.options = this.optionsOpen
      }
    }

  }

  deslogar() {
    this.authService.logout()
  }

  acao(nome){
    if(nome == "Login"){
      this.router.navigate(['login'])
    }else {
      localStorage.removeItem('idAnimal');
      localStorage.removeItem('email');
      localStorage.removeItem('tipoUsuario');
      localStorage.removeItem('depoimento');
      localStorage.removeItem('tipoSolicitacao');
      this.deslogar();
    }
  }
}
