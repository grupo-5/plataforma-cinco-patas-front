import { PessoaRepository } from './../../../../../_core/repository/pessoa-repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {

  personLabel: any = {
    "Tutor": "#189CA1",
    "Adotante": "#77CE32",
    "Responsável": "#FF4C61"
  };

  usuariosListados: any[] = [];

  constructor(private repository: PessoaRepository) { }

  ngOnInit(): void {
    this.carregaUsuarios();
  }

  public carregaUsuarios() {
    this.repository.getAllPessoas().subscribe((resposta) => {
      this.addArray(resposta);
    });
  }

  public addArray(object) {
    let newObject = {
      'Nome': object.nome,
      'Tipo de Usuário': object.tipo.charAt(0) + object.tipo.slice(1).toLowerCase(),
      'E-mail': object.email,
      'Contato': object.contato
    }
    this.usuariosListados.push(newObject);
  }

}
