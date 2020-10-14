import { SharedDataService } from './../../../../../_services/shared-data.service';
import { AnimalModel } from './../../../../../animal/model/animal-model';
import { AnimalRepository } from './../../../../../animal/repository/animal-repository';

import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-create-p2',
  templateUrl: './animal-create-p2.component.html',
  styleUrls: ['./animal-create-p2.component.css'],
})
export class AnimalCreateP2Component implements OnInit {
  id: number;
  formCadastro: FormGroup;
  selectedMessage: any;

  // Provavelmente ocorrerá mudanças nessa classe
  constructor(
    public sharedDataService: SharedDataService,
    public animalService: AnimalRepository,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.sharedDataService.currentMessage.subscribe(
      (message) => (this.selectedMessage = message)
    );

    if (this.id) {
      this.animalService
        .getAnimalById(this.id)
        .subscribe((animal: AnimalModel) => this.criarFormulario(animal));
    } else {
      this.criarFormulario(this.criarAnimalEmBranco());
    }
  }

  private criarFormulario(animal: AnimalModel): void {
    this.formCadastro = this.fb.group({
      nomeTitular: [animal.nomeTitular, [Validators.required]],
      celular: [animal.contato, [Validators.required]],
      enderecoLogradouro: [animal.endereco.logradouro, [Validators.required]],
      enderecoCidade: [animal.endereco.cidade, [Validators.required]],
      enderecoEstado: [animal.endereco.cidade.estado, [Validators.required]],
      enderecoNumero: [animal.endereco.numero, [Validators.required]],
      enderecoComplemento: [animal.endereco.complemento, [Validators.required]],
      enderecoCep: [animal.endereco.cep, [Validators.required]],
    });
  }

  private criarAnimalEmBranco(): AnimalModel {
    return {} as AnimalModel;
  }

  private salvar(animal: AnimalModel) {
    if (this.selectedMessage != '') {
      let animalAssign = Object.assign(
        JSON.parse(this.selectedMessage),
        animal
      );
    }

    this.sharedDataService.changeMessage(JSON.stringify(animal));
  }

  submit(): void {
    this.formCadastro.markAllAsTouched();  // Faz parecer que todos os campos foram clicados
    if (this.formCadastro.invalid) {
      console.log("\n inválido form  ")
      return;
    }

    const animal = this.formCadastro.getRawValue() as AnimalModel;  // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      animal.id = this.id;

    }
     else {
      console.log("salvar *** " + animal.nome)
      this.salvar(animal);
    }
  }
}
