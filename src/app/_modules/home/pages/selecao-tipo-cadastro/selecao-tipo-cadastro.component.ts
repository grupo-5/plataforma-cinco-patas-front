import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-tipo-cadastro',
  templateUrl: './selecao-tipo-cadastro.component.html',
  styleUrls: ['./selecao-tipo-cadastro.component.css'],
})
export class SelecaoTipoCadastroComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  trocaRota = (evento) => {
    evento.target.innerText == 'Adotante'
      ? this.route.navigate(['cadastro-adotante'])
      : this.route.navigate(['cadastro-instituicao']);
  };
}
