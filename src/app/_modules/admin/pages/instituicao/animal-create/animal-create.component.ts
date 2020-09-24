import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Animal } from '../../../../../_models/animal.model';
import { AnimalService } from './../../../../../_services/animal.service';
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
  cuidados_vets: Array<String>;
  personalidades: Array<String>;
  portes: Array<String>;
  localizacoes: Array<String>;
  cidades: Array<String>;
  informacoes: string;
  

  constructor(
    public animalService: AnimalService,
    public validarInputsService: ValidarInputsService,
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

    this.generos = ['Masculino', 'Feminino'];
    this.especies = ['Gato', 'Cachorro'];
    this.portes = ['P','M','G'];
    this.personalidades = ['Dócil', 'Brincalhão', 'Sociável', 'Imperativo', 'Carente'];
    this.cuidados_vets = ['Vermifugado', 'Castrado', 'Vacinado', 'Cuidados especiais'];
    this.localizacoes = ['Ong','Com o dono'];
    this.cidades = ['','São Paulo', 'Rio de Janeiro', 'Goias'];
  }


  submit(): void {
    this.formCadastro.markAllAsTouched();  // Faz parecer que todos os campos foram clicados
    if (this.formCadastro.invalid) {
      console.log("\n inválido form  ")
      return;
    }

    const animal = this.formCadastro.getRawValue() as Animal;  // retorna os campos que existem dentro do formGroup cadastro
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

  private criarFormulario(animal: Animal): void {
    this.formCadastro = this.fb.group({
      nome: [animal.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]], // Não está imprimindo a msg quando tem menos que 3 mais que 100
      dataNasci: [animal.dataNasci, [Validators.required]],
      especie: [animal.especie, [Validators.required]],
      sexo: [animal.sexo, [Validators.required]],
      porte: [animal.porte, [Validators.required]],
      personalidade: [animal.personalidade, [Validators.required]],
      cuidados_vet: [animal.cuidados_vet, [Validators.required]],
      localizacao: [animal.localizacao, [Validators.required]],
      cidade:[animal.cidade,[Validators.required]],
      info_extras: [animal.info_extras],
      // email: [animal.email, [Validators.required, Validators.email]],
    });
  }

  private criarAnimalEmBranco(): Animal {
    return {} as Animal;
  }

  private editar(animal: Animal): void {
    this.animalService.editar(animal).subscribe();

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

  private salvar(animal: Animal): void {
    this.animalService.salvar(animal).subscribe();

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
