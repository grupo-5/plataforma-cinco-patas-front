import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-create-p3',
  templateUrl: './animal-create-p3.component.html',
  styleUrls: ['./animal-create-p3.component.css']
})
export class AnimalCreateP3Component implements OnInit {
  
  disabled: boolean = false;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Upload Foto'];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  trocaRota = (evento) => {
    evento.target.innerText == 'Voltar'
      ? this.router.navigate(['cadastro-animal-2'])
      : this.router.navigate(['cadastro-animal-2']);
  }

}
