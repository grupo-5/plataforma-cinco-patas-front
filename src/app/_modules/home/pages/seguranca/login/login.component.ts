import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  disabled=false;

  constructor(private route: Router, private fb: FormBuilder, private service: AuthService) {}

  ngOnInit(): void {
    this.criaFormulario();
  }

  criaFormulario = () => {
    this.formLogin = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  };


  trocaRota = (evento) => {
   this.route.navigate(['instituicao'])
  };

  logar() {
    if (this.formLogin.invalid) {
      return;
    }
    //fazer a chamada
    const user = this.formLogin.value.login;
    const password = this.formLogin.value.senha;

    this.service.login(user, password);
  }
}
