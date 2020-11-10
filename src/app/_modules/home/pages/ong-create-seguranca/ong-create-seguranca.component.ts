import { InstituicaoModel } from './../../../../_core/model/instituicao-model';
import { InstituicaoDataService } from './../../../../_services/instituicao-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong-create-seguranca',
  templateUrl: './ong-create-seguranca.component.html',
  styleUrls: ['./ong-create-seguranca.component.css']
})
export class OngCreateSegurancaComponent implements OnInit {

  public listaPassos = ['Dados', 'Endereço', 'Segurança', 'Upload de Imagem'];
  public formCadastro: FormGroup;
  public disabled: boolean;

  public selectedMessage: any;
  public id: number;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private instituicaoDataService: InstituicaoDataService
  ) { }

  ngOnInit(): void {
    this.criarForm();

    this.instituicaoDataService.currentMessageInstituicao.subscribe(
      (message) => {
        if (message != '') {
          this.selectedMessage = message;
        } else {
          this.router.navigate(['cadastro-instituicao-1']);
        }
      }
    );
  }

  public submit(): void {

    this.formCadastro.markAllAsTouched();

    if(!this.validarSenhas()) {
      return;
    }

    if(this.formCadastro.status === 'INVALID') {
      return;
    } 

    const adotante = this.formCadastro.getRawValue() as InstituicaoModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      adotante.id = this.id;
      console.log('editar *** ' + adotante.nome);
      // this.editar(adotante);
    } else {
      console.log('salvar *** ' + adotante.nome);
      this.salvar(adotante);
    }
    
  }

  private salvar(ong: InstituicaoModel) {
    if (this.selectedMessage != '') {
      Object.assign(ong, JSON.parse(this.selectedMessage));
      this.instituicaoDataService.changeMessage(JSON.stringify(ong));
      this.trocaRota();
    }
  }

  public resetForm(): void {
    this.formCadastro.reset();
  }

  public criarForm(): void {
    this.formCadastro = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  public validarSenhas(): boolean {
    if(this.formCadastro.get('senha').value !== this.formCadastro.get('confirmarSenha').value) {
      return false;
    }

    return true;
  }

  public trocaRota(evento?) {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.router.navigate(['cadastro-instituicao-1'])
        : this.router.navigate(['cadastro-instituicao-3']);
    } else {
      this.router.navigate(['cadastro-instituicao-3']);
    }
  };

}
