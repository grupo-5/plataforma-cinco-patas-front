import { PessoaDataService } from './../../../../_services/pessoa-data.service';
import { PessoaModel } from './../../../../_core/model/pessoa-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-adotante-seguranca',
  templateUrl: './cadastro-adotante-seguranca.component.html',
  styleUrls: ['./cadastro-adotante-seguranca.component.css']
})
export class CadastroAdotanteSegurancaComponent implements OnInit {
  
  // timeline
  public listaPassos = ['Dados Pessoais', 'Endereço', 'Segurança', 'Upload de Imagem'];

  //form
  public formCadastroAdotante: FormGroup;

  public disabled: boolean;
  public selectedMessagePessoa: any;
  public id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private route: Router,
    public pessoaDataService: PessoaDataService
  ) { }

  ngOnInit(): void {
    this.criarForm();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.pessoaDataService.currentMessagePessoa.subscribe((message) => {
      if(message!=''){
        this.selectedMessagePessoa = message;
          }else{
        this.route.navigate(['cadastro-adotante'])
      }
    });
  }

  public submit(): void {

    this.formCadastroAdotante.markAllAsTouched();

    if(!this.validarSenhas()) {
      return;
    }

    if(this.formCadastroAdotante.status === 'INVALID') {
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
    
  }

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

  public resetForm(): void {
    this.formCadastroAdotante.reset();
  }

  public criarForm(): void {
    this.formCadastroAdotante = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public validarSenhas(): boolean {
    if(this.formCadastroAdotante.get('senha').value !== this.formCadastroAdotante.get('confirmarSenha').value) {
      return false;
    }

    return true;
  }

  public trocaRota(evento?) {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.route.navigate(['cadastro-adotante-1'])
        : this.route.navigate(['cadastro-adotante-3']);
    } else {
      this.route.navigate(['cadastro-adotante-3']);
    }
  };
}
