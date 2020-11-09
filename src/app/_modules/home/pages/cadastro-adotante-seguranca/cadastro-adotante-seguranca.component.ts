import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-adotante-seguranca',
  templateUrl: './cadastro-adotante-seguranca.component.html',
  styleUrls: ['./cadastro-adotante-seguranca.component.css']
})
export class CadastroAdotanteSegurancaComponent implements OnInit {
  
  // timeline
  public listaPassos = ['Dados Pessoais', 'Endereço', 'Segurança', 'Upload de Imagem'];

  //form
  public formCadastroAdotante: FormGroup;

  public disabled: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.criarForm();
  }

  public submit(): void {

  //   if(!this.validarSenhas()) {
  //     this.formCadastroAdotante.markAllAsTouched();
  //     return;
  //   }

  //   if(this.formCadastroAdotante.status === 'INVALID') {
  //     this.formCadastroAdotante.markAllAsTouched();
  //   } else {
  //     let 
  //   }
    
  }

  public resetForm(): void {
    this.formCadastroAdotante.reset();
  }

  public criarForm(): void {
    this.formCadastroAdotante = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public validarSenhas(): boolean {
    if(this.formCadastroAdotante.get('senha').value !== this.formCadastroAdotante.get('confirmarSenha').value) {
      return false;
    }

    return true;
  }

  public trocaRota(evento?) {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.route.navigate(['cadastro-adotante-1'])
        : this.route.navigate(['cadastro-adotante-3']);
    } else {
      this.route.navigate(['cadastro-adotante-3']);
    }
  };
}
