import { PessoaRepository } from './../../../../_core/repository/pessoa-repository';
import { PessoaModel } from './../../../../_core/model/pessoa-model';
import { PessoaDataService } from './../../../../_services/pessoa-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { faRulerHorizontal } from '@fortawesome/free-solid-svg-icons';
import { syntaxError } from '@angular/compiler';

@Component({
  selector: 'app-cadastro-adotante-match',
  templateUrl: './cadastro-adotante-match.component.html',
  styleUrls: ['./cadastro-adotante-match.component.css'],
})
export class CadastroAdotanteMatchComponent implements OnInit {
  formCadastroAdotante: FormGroup;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled = false;
  id: any;
  selectedMessagePessoa: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    public pessoaDataService: PessoaDataService,
    public repository: PessoaRepository
  ) {}

  ngOnInit(): void {
    this.criaFormulario();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.pessoaDataService.currentMessagePessoa.subscribe((message) => {
      if(message!=''){
        this.selectedMessagePessoa = message;
        console.log(this.selectedMessagePessoa);
      }else{
        this.route.navigate(['cadastro-adotante-2'])
      }
    });
  }

  criaFormulario = () => {
    this.formCadastroAdotante = this.fb.group({
      name: ['', Validators.required],
    });
  };

  trocaRota = (evento) => {
    evento.target.innerText == 'Voltar'
      ? this.route.navigate(['cadastro-adotante-2'])
      : this.route.navigate(['cadastro-adotante-3']);
  };

  submit(): void {
    this.formCadastroAdotante.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    // if (this.formCadastro.invalid) {
    //   console.log("\n inválido form  ")
    //   return;
    // }

    const pessoa = <PessoaModel>this.formCadastroAdotante.getRawValue(); // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      pessoa.id = this.id;
      console.log('editar *** ' + pessoa.nome);
      this.editar(JSON.parse(this.selectedMessagePessoa));
    } else {
      console.log('salvar *** ' + pessoa.nome);
      this.salvar(JSON.parse(this.selectedMessagePessoa));
    }
  }

  editar(pessoa) {}

  salvar(pessoa) {
    const dados: PessoaModel = {
      nome: pessoa.name,
      sexo: pessoa.sexo,
      rg:pessoa.rg,
      cpf:pessoa.cpf,
      contato:pessoa.contato,
      tipo:'ADOTANTE',
      email:pessoa.email,
      endereco: {
        cep: pessoa.cep,
        logradouro: pessoa.logradouro,
        numero: pessoa.numero,
        complemento: pessoa.complemento,
        bairro: pessoa.bairro,
        cidade: {
          nome: pessoa.cidade,
          estado: {
            nome: pessoa.estado,
          },
        },
      },
    };

    console.log(dados);
    this.repository
      .postPessoa(dados)
      .subscribe((resposta) => console.log(resposta));
  }
  resetForm() {}
}
