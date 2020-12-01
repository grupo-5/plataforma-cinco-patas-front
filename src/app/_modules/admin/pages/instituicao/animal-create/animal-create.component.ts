import { SharedDataService } from './../../../../../_services/shared-data.service';
import { AnimalModel } from './../../../../../_core/model/animal-model';
import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl} from '@angular/forms';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css'],
})
export class AnimalCreateComponent implements OnInit {
  id: number;
  formCadastro: FormGroup;
  generos: Array<String>;
  especies: Array<String>;
  cuidadosVet: Array<any>;
  personalidades: Array<any>;
  portes: Array<String>;
  localizacoes: Array<String>;
  informacoes: string;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Upload Foto'];
  disabled: boolean = false;
  controlName: string;

  constructor(
    public sharedDataService: SharedDataService,
    public animalRepositoy: AnimalRepository,
    public validarInputsService: ValidarInputsService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.animalRepositoy
        .getAnimalById(this.id)
        .subscribe((animal: AnimalModel) => {

          this.criarFormulario(animal)
        }
        );
      // this.carregarAnimal(this.id);
    } else {
      this.criarFormulario(this.criarAnimalEmBranco())
    }

    this.generos = ['Macho', 'Fêmea'];
    this.especies = ['Gato', 'Cachorro'];
    this.portes = ['P', 'M', 'G'];
    this.personalidades = [
      'Dócil',
      'Brincalhão',
      'Sociável',
      'Imperativo',
      'Carente',
    ];

    this.cuidadosVet = [
      'Vermifugado',
      'Castrado',
      'Vacinado',
      'Cuidados especiais',
    ];
    this.localizacoes = ['Ong', 'Com o dono'];
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
      console.log('editar *** ' + animal.nome);
      this.salvar(animal);
    } else {
      console.log('salvar *** ' + animal.nome);
      this.salvar(animal);
    }
  }

  reiniciarForm(): void {
    this.formCadastro.reset();
  }
  
  private criarFormulario(animal: AnimalModel): void {

    this.formCadastro = this.fb.group({
      nome: [
        animal.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      dataNasc: [animal.dataNasc, [Validators.required]],
      especie: [animal.especie, [Validators.required]],
      sexo: [animal.sexo, [Validators.required]],
      porte: [animal.porte, [Validators.required]],
      personalidades: this.fb.array([animal.personalidades], [Validators.required]),
      cuidadosVet: this.fb.array([animal.cuidadosVet], [Validators.required]),
      localizacao: [animal.localizacao, [Validators.required]],
      infoExtras: [animal.infoExtras],
    });
  }

  private criarAnimalEmBranco(): AnimalModel {
    return {} as AnimalModel;
  }

  private editar(animal: AnimalModel): void {
    console.log(animal);
    this.sharedDataService.changeMessage(JSON.stringify(animal));
    this.trocaRota('', animal.id);

  }

  private salvar(animal: AnimalModel): void {
    console.log(animal);

    let formAnimal = Object.assign({}, animal);

    formAnimal = Object.assign(formAnimal, {
      personalidades:
        formAnimal.personalidades
          .filter(v => v != null)
          .map((v, i) => { return { descricao: v } })
    });

    formAnimal = Object.assign(formAnimal, {
      cuidadosVet:
        formAnimal.cuidadosVet
          .filter(v => v != null)
          .map((v, i) => { return { descricao: v } })
    });

    console.log(formAnimal);
    this.sharedDataService.changeMessage(JSON.stringify(formAnimal));
    this.trocaRota('', animal.id);
  }


  carregarAnimal(codigoAnimal: number) {
    this.animalRepositoy.getAnimalById(codigoAnimal).subscribe(resposta => {
      this.formCadastro.controls.id.setValue(resposta.id);
      this.formCadastro.controls.nome.setValue(resposta.nome);
      this.formCadastro.controls.sobrenome.setValue(resposta.dataNasc);
      this.formCadastro.controls.telefones.setValue(resposta.personalidades[0].descricao);
      this.formCadastro.controls.dataNasc.setValue(resposta.especie);
      this.formCadastro.controls.cpf.setValue(resposta.sexo);
      this.formCadastro.controls.rg.setValue(resposta.porte);
      this.formCadastro.controls.email.setValue(resposta.localizacao);
      this.formCadastro.controls.cep.setValue(resposta.infoExtras);
      this.formCadastro.controls.logradouro.setValue(resposta.cuidadosVet[0].descricao);
    });
  }


  trocaRota = (evento?, id?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.router.navigate(['animais'])
        : this.router.navigate(['cadastro-animal-1']);
    } else {

      if (id) {

        this.router.navigate(['cadastro-animal-2/' + id]);
      }
      else {
        this.router.navigate(['cadastro-animal-2']);
      }
    }

  };

  onCheckboxChange(e) {
    const personalidadess: FormArray = this.formCadastro.get('personalidades') as FormArray;

    if (e.target.checked) {
      personalidadess.push(new FormControl(e.target.value));
    } else {
      const index = personalidadess.controls.findIndex(x => x.value === e.target.value);
      personalidadess.removeAt(index);
    }
  }

  onCheckboxChangee(e) {
    const cuidados: FormArray = this.formCadastro.get('cuidadosVet') as FormArray;
    if (e.target.checked) {
      cuidados.push(new FormControl(e.target.value));
    } else {
      const index = cuidados.controls.findIndex(x => x.value === e.target.value);
      cuidados.removeAt(index);
    }
  }

  // get formControl(): AbstractControl {
  //   return this.formCadastro.controls[this.controlName];
  // }
}
