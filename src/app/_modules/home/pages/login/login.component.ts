import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  disabled=false;

  constructor(private route: Router, private fb: FormBuilder) {}

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
}
