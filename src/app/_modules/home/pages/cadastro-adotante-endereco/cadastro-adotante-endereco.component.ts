import { PessoaDataService } from './../../../../_services/pessoa-data.service';
import { PessoaModel } from './../../../../_core/model/pessoa-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-adotante-endereco',
  templateUrl: './cadastro-adotante-endereco.component.html',
  styleUrls: ['./cadastro-adotante-endereco.component.css'],
})
export class CadastroAdotanteEnderecoComponent implements OnInit {

  formCadastroAdotante: FormGroup;
  listSexo = ['Feminino', 'Masculino', 'Nao declarar'];
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled: boolean = false;
  id: any;
  selectedMessagePessoa: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder,
    public pessoaDataService: PessoaDataService
  ) {}

  ngOnInit(): void {
    this.criaFormulario();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.pessoaDataService.currentMessagePessoa.subscribe((message) => {
      if(message!=''){
        this.selectedMessagePessoa = message;
          }else{
        this.route.navigate(['cadastro-adotante'])
      }
    });
  }

  criaFormulario = () => {
    this.formCadastroAdotante = this.fb.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      complemento: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
    });
  };

  submit = () => {
    this.formCadastroAdotante.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    if (this.formCadastroAdotante.invalid) {
      console.log('\n inválido form  ');
      return;
    }

    const adotante = this.formCadastroAdotante.getRawValue() as PessoaModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      adotante.id = this.id;
      console.log('editar *** ' + adotante.nome);
      // this.editar(adotante);
    } else {
      console.log('salvar *** ' + adotante.nome);
      this.salvar(adotante);
    }
  };

  private salvar = (adotante: PessoaModel) => {

      console.log(this.selectedMessagePessoa);
      console.log(adotante);
      if (this.selectedMessagePessoa != '') {
        Object.assign(adotante, JSON.parse(this.selectedMessagePessoa));
        console.log(adotante);
      }
  
      this.pessoaDataService.changeMessage(JSON.stringify(adotante));
      this.trocaRota();
    }
  

  resetForm(): void {
    this.formCadastroAdotante.reset();
  }

  trocaRota = (evento?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.route.navigate(['cadastro-adotante'])
        : this.route.navigate(['cadastro-adotante-3']);
    } else {
      this.route.navigate(['cadastro-adotante-3']);
    }
  };


}
