import { SharedDataService } from './../../../../../_services/shared-data.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AnimalRepository } from './../../../../../_core/repository/animal-repository';
import { AnimalModel } from './../../../../../_core/model/animal-model';

@Component({
  selector: 'app-animal-create-p3',
  templateUrl: './animal-create-p3.component.html',
  styleUrls: ['./animal-create-p3.component.css'],
})
export class AnimalCreateP3Component implements OnInit {
  formCadastro: FormGroup;
  id;
  disabled: boolean = false;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Upload Foto'];
  selectedMessage: any;
  image: any;
  mensagem;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sharedDataService: SharedDataService,
    public repository: AnimalRepository,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentMessage.subscribe((message) => {
      if (message != '') {
        this.selectedMessage = message;
      } else {
        this.router.navigate(['cadastro-animal-2'])
      }
      this.criarFormulario(JSON.parse(message));
    });

    console.log(JSON.parse(this.selectedMessage) as AnimalModel);
  }
  private criarFormulario(animal: AnimalModel): void {
    this.formCadastro = this.fb.group(JSON.parse(this.selectedMessage));
  }
  trocaRota = (evento) => {
    evento.target.innerText == 'Voltar'
      ? this.router.navigate(['cadastro-animal-2'])
      : this.router.navigate(['cadastro-animal-2']);
  };

  submit(): void {
    this.formCadastro.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    // if (this.formCadastro.invalid) {
    //   console.log("\n inválido form  ")
    //   return;
    // }
    const animal = this.formCadastro.getRawValue() as AnimalModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      animal.id = this.id;
      console.log('editar *** ' + animal.nome);
      this.editar(JSON.parse(this.selectedMessage));
    } else {
      console.log('salvar *** ' + animal.nome);
      this.salvar(JSON.parse(this.selectedMessage));
    }
  }

  editar(animal: AnimalModel) { }

  receiveImage(image) {
    this.image = image;
  }
  salvar(animal) {

    this.repository.postImagem(this.image).subscribe((resposta) => {
      //@ts-ignore
      let imageId = resposta.data.id;
      console.log("resposta upload");
      console.log(resposta);
      console.log("id da imagem " + imageId);

      // animal.personalidades = [{ descricao: 'oia' }, { descricao: 'eii' }];
      // animal.cuidadosVet = [{ descricao: 'um' }, { descricao: 'dois' }];
      // animal.personalidades = [{ descricao: 'oia' }, { descricao: 'eii' }];
      // animal.cuidadosVet = [{ descricao: 'um' }, { descricao: 'dois' }];
      animal.status = 'disponivel';

      const dados = {
        nome: animal.nome,
        especie: animal.especie,
        dataNasc: animal.dataNasc,
        sexo: animal.sexo,
        porte: animal.porte,
        localizacao: animal.localizacao,
        infoExtras: animal.infoExtras,
        cuidadosVet: animal.cuidadosVet,
        personalidades: animal.personalidades,
        nomeTitular: animal.nomeTitular,
        status: animal.status,
        contato: animal.contato,
        endereco: {
          cep: animal.enderecoCep,
          logradouro: animal.enderecoLogradouro,
          numero: animal.enderecoNumero,
          complemento: animal.enderecoComplemento,
          bairro: animal.enderecoBairro,
          cidade: {
            id: animal.enderecoCidade,
            estado: {
              id: animal.enderecoEstado,
            },
          },
        },
        imagem: {
          id: imageId,
        },
      } as AnimalModel;


      console.log("personalidades: " + dados.personalidades);
      console.log("cuidados : " + dados.cuidadosVet);

      if (dados.id) {
        this.repository.putAnimal(dados).subscribe(resposta => {
          this.reiniciarForm();
        });
      } else {
        this.repository.postAnimal(dados).subscribe(resposta => {
          this.mensagem = [
            {
              severity: 'success',
              summary: 'CLIENTE',
              detail: 'cadastrado com sucesso!'
            }];
          this.router.navigate(['/animais']);            
          this.reiniciarForm();
        },
          (e) => {
            var msg: any[] = [];
            //Erro Principal
            msg.push({
              severity: 'error',
              summary: 'ERRO',
              detail: e.error.userMessage
            });
            //Erro de cada atributo
            var erros = e.error.objects;
            erros.forEach(function (elemento) {
              msg.push(
                {
                  severity: 'error',
                  summary: 'ERRO',
                  detail: elemento.userMessage
                });
            });
            this.mensagem = msg;
          }
        );
      }
      console.log("Dadosdo animal" + dados);
      // this.repository
      //   .postAnimal(dados)
      //   .subscribe((resposta) => console.log(resposta));
    });

  }
  reiniciarForm() { }
}