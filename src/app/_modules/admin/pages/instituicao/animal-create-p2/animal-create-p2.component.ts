import { Animal } from './../../../../../_models/animal.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';
import { AnimalService } from './../../../../../_services/animal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-create-p2',
  templateUrl: './animal-create-p2.component.html',
  styleUrls: ['./animal-create-p2.component.css']
})
export class AnimalCreateP2Component implements OnInit {
  id: number;
  formCadastro: FormGroup;
  disabled: boolean = false;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Upload Foto'];

  // Provavelmente ocorrerá mudanças nessa classe
  constructor(public animalService: AnimalService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.animalService.visualizar(this.id).subscribe((animal: Animal) => this.criarFormulario(animal));
    }
    else {
      this.criarFormulario(this.criarAnimalEmBranco());
    }
  }

  private criarFormulario(animal: Animal): void {
    this.formCadastro = this.fb.group({
      nomeTitular: [animal.nomeTitular, [Validators.required]],
      enderecoLogradouro: [animal.enderecoLogradouro, [Validators.required]],
      enderecoCidade: [animal.enderecoCidade, [Validators.required]],
      enderecoEstado: [animal.enderecoEstado, [Validators.required]],
      enderecoNumero: [animal.enderecoNumero, [Validators.required]],
      enderecoComplemento: [animal.enderecoComplemento, [Validators.required]],
      enderecoCep: [animal.enderecoCep, [Validators.required]],
      contato: [animal.contato]
    });
  }

  private criarAnimalEmBranco(): Animal {
    return {} as Animal;
  }

  trocaRota = (evento) => {
    evento.target.innerText == 'Voltar'
      ? this.router.navigate(['cadastro-animal-1'])
      : this.router.navigate(['cadastro-animal-3']);
  }
}
