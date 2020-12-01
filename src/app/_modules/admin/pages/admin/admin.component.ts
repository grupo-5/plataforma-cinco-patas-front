import { ActivatedRoute } from '@angular/router';
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

  nome: string ;//= ""
  imagem: string = "./assets/images/sem-img.png"

  constructor(public pessoaRepository: PessoaRepository, 
              public instituicaoRepository: InstituicaoRepository,
              public UsuarioRepository: UsuarioRepository,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.carregaDadosUsuario();
  }

  carregaDadosUsuario() {
    const email = localStorage.getItem('email');
    this.UsuarioRepository.getUsuarioByEmail(email).subscribe((resposta) => {
      console.log(resposta);

      if (resposta.tipo == 1) {
        this.pessoaRepository.getPessoaByCodigo().subscribe((resposta) => {
          console.log(resposta)
          this.imagem = resposta.imagem.url;
          this.nome = resposta.nome;
        });
      } else if (resposta.tipo == 2) {
        this.instituicaoRepository.getInstituicaoByCodigo().subscribe((resposta) => {
          this.imagem = resposta.imagem.url;
          this.nome = resposta.nome;
        });
      }
    });
  }
   
}
