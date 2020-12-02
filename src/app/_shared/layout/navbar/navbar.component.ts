import { Component, Input, OnInit, NgModule, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() ambiente: any
  public options=[]

  optionsOpen = [
    { name: 'home', route: '', type: 'link' },
    { name: 'Sobre Nos', route: '/sobre-nos', type: 'link' },
    { name: 'Depoimentos', route: '/depoimentos', type: 'link' },
    { name: 'Instituições Parceiras', route: '/instituicoes-parceiras', type: 'link' },
    { name: 'Login', route: '/instituicao', type: 'button' },

  ];
  
  optionsLogadoOng = [
    { name: 'Notificacoes', route: '/instituicoes-parceiras', type: 'link' },
    { name: '', route: '/instituicoes-parceiras', type: 'dropdown' },

    
  ];
  optionsLogadoUser= [
    { name: 'Notificacoes', route: '/instituicoes-parceiras', type: 'link' },
    { name: '', route: '/instituicoes-parceiras', type: 'dropdown' },

    
  ];



  constructor() {}

  ngOnInit(): void {
 
  }

  ngOnChanges(changes:SimpleChanges){
    if(!changes.isFirstChange)
{

  console.log(this.ambiente)
  if (this.ambiente=="logadoOng"){
    this.options=this.optionsLogadoOng
  }
  else if(this.ambiente=="logadoUser"){
    this.options=this.optionsLogadoOng
  }
  else{
    this.options=this.optionsOpen
  }
}
    
  }
}
