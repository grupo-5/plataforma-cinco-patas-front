import { EnderecoRepository } from './../../../../../_core/repository/endereco-repository ';
import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { AnimalModel } from './../../../../../_core/model/animal-model';
import { SharedDataService } from './../../../../../_services/shared-data.service';
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
  disabled: boolean = false;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Upload Foto'];
  selectedMessage: any;
  estados: any[] = [];
  cidades: any[] = [];

  // Provavelmente ocorrerá mudanças nessa classe
  constructor(
    public sharedDataService: SharedDataService,
    public animalService: AnimalRepository,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private repository: EnderecoRepository
  ) {}

  ngOnInit(): void {
    this.listarEstados();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.sharedDataService.currentMessage.subscribe((message) => {
      if (message != '') {
        this.selectedMessage = message;
      } else {
        this.router.navigate(['cadastro-animal-1']);
      }
    });

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
      enderecoLogradouro: ['', [Validators.required]],
      enderecoCidade: ['', [Validators.required]],
      enderecoBairro: ['', [Validators.required]],
      enderecoEstado: ['', [Validators.required]],
      enderecoNumero: ['', [Validators.required]],
      enderecoComplemento: ['', [Validators.required]],
      enderecoCep: ['', [Validators.required]],
      contato: ['', [Validators.required]],
      // celular: [animal.contato, [Validators.required]],
      // enderecoLogradouro: [animal.endereco.logradouro, [Validators.required]],
      // enderecoCidade: [animal.endereco.cidade, [Validators.required]],
      // enderecoEstado: [animal.endereco.cidade.estado, [Validators.required]],
      // enderecoNumero: [animal.endereco.numero, [Validators.required]],
      // enderecoComplemento: [animal.endereco.complemento, [Validators.required]],
      // enderecoCep: [animal.endereco.cep, [Validators.required]],
    });
  }

  private criarAnimalEmBranco(): AnimalModel {
    return {} as AnimalModel;
  }

  private salvar(animal: AnimalModel) {
    console.log(this.selectedMessage);
    console.log(animal);
    if (this.selectedMessage != '') {
      Object.assign(animal, JSON.parse(this.selectedMessage));
      console.log(animal);
    }

    this.sharedDataService.changeMessage(JSON.stringify(animal));
    this.trocaRota();
  }

  valida(): void {
    this.formCadastro.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    if (this.formCadastro.invalid) {
      console.log('\n inválido form  ');
      return;
    }

    const animal = this.formCadastro.getRawValue() as AnimalModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      animal.id = this.id;
    } else {
      console.log('salvar *** nome animal: ' + animal.nome);
      this.salvar(animal);
    }
  }

  trocaRota = (evento?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.router.navigate(['cadastro-animal-1'])
        : this.router.navigate(['cadastro-animal-3']);
    } else {
      this.router.navigate(['cadastro-animal-3']);
    }
  };

  listarEstados() {
    this.repository.getAllEstados().subscribe((resposta) => {
      this.estados.push({ label: resposta.nome, value: resposta.id });
      console.log(this.estados);
    });
  }

  listarCidades() {
    this.cidades = [];
    let id: number = this.formCadastro.value.enderecoEstado;
    this.repository.getAllCidadesByEstado(id).subscribe((resposta) => {
      this.cidades.push({ label: resposta.nome, value: resposta.id });
    });
  }

  editar(animal: AnimalModel): void {
    this.sharedDataService.changeMessage(JSON.stringify(animal));
  }
}
