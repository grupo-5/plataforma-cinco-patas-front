import { FormBuilder, FormGroup } from '@angular/forms';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';
import { InstituicaoDataService } from './../../../../_services/instituicao-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InstituicaoModel } from 'src/app/_core/model/instituicao-model';

@Component({
  selector: 'app-ong-create-p3',
  templateUrl: './ong-create-p3.component.html',
  styleUrls: ['./ong-create-p3.component.css']
})
export class OngCreateP3Component implements OnInit {

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
    public instituicaoDataService: InstituicaoDataService,
    public repository: InstituicaoRepository,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.instituicaoDataService.currentMessageInstituicao.subscribe((message) => {
      if(message!=''){
        this.selectedMessage = message;
      }else{
        this.router.navigate(['cadastro-instituicao-2'])
      }

      this.criarFormulario(JSON.parse(message));
    });

    console.log(JSON.parse(this.selectedMessage) as InstituicaoModel);
  }


  private criarFormulario(animal: InstituicaoModel): void {
    this.formCadastro = this.fb.group(JSON.parse(this.selectedMessage));
  }


  trocaRota = (evento) => {
    evento.target.innerText == 'Voltar'
      ? this.router.navigate(['cadastro-instituicao-2'])
      : this.router.navigate(['cadastro-instituicao-3']);
  };

  submit(): void {
    this.formCadastro.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    // if (this.formCadastro.invalid) {
    //   console.log("\n inválido form  ")
    //   return;
    // }

    const ong = this.formCadastro.getRawValue() as InstituicaoModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      ong.id = this.id;
      console.log('editar *** ' + ong.nome);
      this.editar(JSON.parse(this.selectedMessage));
    } else {
      console.log('salvar *** ' + ong.nome);
      this.salvar(JSON.parse(this.selectedMessage));
    }
  }

  editar(ong: InstituicaoModel) {}

  receiveImage(image) {
    this.image = image;
  }
  salvar(ong) {
    let imageId;
    // this.repository.postImagem(this.image).subscribe((resposta) => {
      //@ts-ignore
      // imageId = resposta.id;
      // console.log(resposta);

     
      const dados = {
        capacidade: ong.capacidade,
        razaoSocial: ong.razaoSocial,
        nome: ong.nome,
        tipoDeDocumento: ong.tipoDeDocumento,
        numeroDoDocumento: ong.numeroDoDocumento,
        email: ong.email,
        banco: ong.banco,
        agencia: ong.agencia,
        conta: ong.conta,
        contato: ong.contato,
        inscricaoEstadual: ong.enderecoCep,
          endereco: {
          cep: ong.enderecoCep,
          logradouro: ong.enderecoLogradouro,
          numero: ong.enderecoNumero,
          complemento: ong.enderecoComplemento,
          bairro: ong.enderecoBairro,
          cidade: {
            id: ong.enderecoCidade,
            estado: {
              id: ong.enderecoEstado,
            },
          },
        },
           } as InstituicaoModel;
  

      if (dados.id) {
        this.repository.putInstituicao(dados).subscribe(resposta => {
          this.reiniciarForm();
        });
      } else {
        this.repository.postInstituicao(dados).subscribe(resposta => {
          this.mensagem = [
            {
              severity: 'success',
              summary: 'Instituicao',
              detail: 'cadastrado com sucesso!'
            }];
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
      console.log(dados);
      this.repository
        .postInstituicao(dados)
        .subscribe((resposta) => console.log(resposta));
    // });

  }
  reiniciarForm() {}
}
