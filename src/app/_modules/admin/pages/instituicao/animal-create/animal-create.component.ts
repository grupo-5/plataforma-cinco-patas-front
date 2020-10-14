import { SharedDataService } from './../../../../../_services/shared-data.service';
import { AnimalModel } from './../../../../../animal/model/animal-model';
import { AnimalRepository } from './../../../../../animal/repository/animal-repository';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ValidarInputsService } from './../../../../../_services/validar-inputs.service';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {

  id: number;
  formCadastro: FormGroup;
  generos: Array<String>;
  especies: Array<String>;
  cuidadosVets: Array<String>;
  personalidades: Array<String>;
  portes: Array<String>;
  localizacoes: Array<String>;
  cidades: Array<String>;
  informacoes: string;
  

  constructor(
    public sharedDataService:SharedDataService,
    public animalService: AnimalRepository,
    public validarInputsService: ValidarInputsService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      this.animalService.getAnimalById(this.id).subscribe((animal: AnimalModel) => this.criarFormulario(animal));
    } 
    else {
      this.criarFormulario(this.criarAnimalEmBranco());
   }

    this.generos = ['Macho', 'Fêmea'];
    this.especies = ['Gato', 'Cachorro'];
    this.portes = ['P','M','G'];
    this.personalidades = ['Dócil', 'Brincalhão', 'Sociável', 'Imperativo', 'Carente'];
    this.cuidadosVets = ['Vermifugado', 'Castrado', 'Vacinado', 'Cuidados especiais'];
    this.localizacoes = ['Ong','Com o dono'];
    this.cidades = ['','São Paulo', 'Rio de Janeiro', 'Goias'];
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
      console.log("editar *** " + animal.nome)
      this.editar(animal);
    }
     else {
      console.log("salvar *** " + animal.nome)
      this.salvar(animal);
    }
  }

  reiniciarForm(): void {
    this.formCadastro.reset();
  }

  private criarFormulario(animal: AnimalModel): void {
    this.formCadastro = this.fb.group({
      nome: [animal.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]], // Não está imprimindo a msg quando tem menos que 3 mais que 100
      dataNasci: [animal.dataNasc, [Validators.required]],
      especie: [animal.especie, [Validators.required]],
      sexo: [animal.sexo, [Validators.required]],
      porte: [animal.porte, [Validators.required]],
      personalidade: [animal.personalidade, [Validators.required]],
      cuidadosVet: [animal.cuidadosVet, [Validators.required]],
      localizacao: [animal.localizacao, [Validators.required]],
      infoExtras: [animal.infoExtras],
      // email: [animal.email, [Validators.required, Validators.email]],
    });
  }

  private criarAnimalEmBranco(): AnimalModel {
    return {} as AnimalModel;
  }

  private editar(animal: AnimalModel): void {
   this.sharedDataService.changeMessage(JSON.stringify(animal));

    //   () => {
    //   const config = {
    //     data: {
    //       descricao: 'Seu registro foi atualizado com sucesso!',
    //       btnSucesso: 'Ir para a listagem',
    //     } as Alerta
    //   };
    //   const dialogRef = this.dialog.open(AlertaComponent, config);
    //   dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('animals'));
    // },
    //   () => {
    //     const config = {
    //       data: {
    //         titulo: 'Erro ao editar o registro!',
    //         descricao: 'Não conseguimos editar seu registro, favor tentar novamente mais tarde',
    //         corBtnSucesso: 'warn',
    //         btnSucesso: 'Fechar'
    //       } as Alerta
    //     };
    //     this.dialog.open(AlertaComponent, config);
    //   });
  }

  private salvar(animal: AnimalModel): void {
    this.sharedDataService.changeMessage(JSON.stringify(animal));

    //   () => { // Primeira parte do subscrive é o sucesso
    //   const config = {
    //     data: {
    //       btnSucesso: 'Ir para a listagem',
    //       btnCancelar: 'Cadastrar um novo animal',
    //       corBtnCancelar: 'primary',
    //       possuirBtnFechar: true
    //     } as Alerta
    //   };
    //   const dialogRef = this.dialog.open(AlertaComponent, config);
    //   dialogRef.afterClosed().subscribe((opcao: boolean) => {
    //     if (opcao) { // Verifica qual opção foi clicada no formulario: listar ou cadastrar animal
    //       this.router.navigateByUrl('animals');  //navega para lista de animals
    //     } else {
    //       this.reiniciarForm();
    //     }
    //   });
    // }
    //   () => {  // Segunda parte do subscrive é o error
    //     const config = {
    //       data: {
    //         titulo: 'Erro ao salvar o registro!',
    //         descricao: 'Não conseguimos salvar seu registro, favor tentar novamente mais tarde',
    //         corBtnSucesso: 'warn',
    //         btnSucesso: 'Fechar'
    //       } as Alerta
    //     };
    //     this.dialog.open(AlertaComponent, config);
    //   }
    //   // Terceira parte seria o finally - poderia ter uma configuração para ser exibida independente de dar sucesso ou error.
    // );
  }

}
