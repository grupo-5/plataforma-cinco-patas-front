import { UsuarioRepository } from './../../../../_core/repository/usuario-repository';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';
import { PessoaRepository } from './../../../../_core/repository/pessoa-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  nome: string = ""
  imagem: string = "./assets/images/pessoa.jpg"

  constructor(public pessoaRepository: PessoaRepository, 
              public instituicaoRepository: InstituicaoRepository,
              public UsuarioRepository: UsuarioRepository) { }

  ngOnInit(): void {
  }


}
