import { AuthService } from './../../../home/pages/seguranca/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  exibindoMenu: Boolean = false;
  usuario: string = 'Usuário Desconhecido';
  permissoes: any[] = [];
  ambiente=''
  constructor(public auth: AuthService) {
    this.usuario = auth.jwtPayload ? auth.jwtPayload.user_name : ''
   }

  ngOnInit(): void {
    if(this.auth.temPermissao('DH03')){
     this.ambiente="logadoOng"
  
    }else{
      this.ambiente="logadoUser"
    }
  }

}
