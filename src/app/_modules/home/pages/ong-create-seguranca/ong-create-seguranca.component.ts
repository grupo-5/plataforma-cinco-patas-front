import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong-create-seguranca',
  templateUrl: './ong-create-seguranca.component.html',
  styleUrls: ['./ong-create-seguranca.component.css']
})
export class OngCreateSegurancaComponent implements OnInit {

  public listaPassos = ['Dados', 'Endereço', 'Segurança', 'Foto'];
  public formCadastro: FormGroup;
  public disabled: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  public submit(): void {
    // if(!this.validarSenhas()) {
    //   this.formCadastro.markAllAsTouched();
    //   return;
    // }

    // if(this.formCadastro.status === 'INVALID') {
    //   this.formCadastro.markAllAsTouched();
    // } else {

    // }
  }

  public resetForm(): void {
    this.formCadastro.reset();
  }

  public criarForm(): void {
    this.formCadastro = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public validarSenhas(): boolean {
    if(this.formCadastro.get('senha').value !== this.formCadastro.get('confirmarSenha').value) {
      return false;
    }

    return true;
  }

  public trocaRota(evento?): void {

  }

}
