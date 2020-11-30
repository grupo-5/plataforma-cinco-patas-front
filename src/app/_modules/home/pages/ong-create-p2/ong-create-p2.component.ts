import { EnderecoRepository } from './../../../../_core/repository/endereco-repository ';
import { InstituicaoDataService } from './../../../../_services/instituicao-data.service';
import { InstituicaoModel } from './../../../../_core/model/instituicao-model';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidarInputsService } from './../../../../_services/validar-inputs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ong-create-p2',
  templateUrl: './ong-create-p2.component.html',
  styleUrls: ['./ong-create-p2.component.css'],
})
export class OngCreateP2Component implements OnInit {
  //timeline
  listaPassos = ['Dados', 'Endereço', 'Segurança', 'Upload de Imagem'];
  id: number;
  formCadastro: FormGroup;
  selectedMessage;
  disabled: boolean = false;
  estados: any[] = [];
  cidades: any[] = [];


  constructor(
    public ongService: InstituicaoRepository,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public instituicaoDataService: InstituicaoDataService,
    private repository: EnderecoRepository
  ) {}

  ngOnInit(): void {
    this.listarEstados();
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id) {
      // this.ongService.visualizar(this.id).subscribe((ong: Ong) => this.criarFormulario(ong));
    } else {
      this.criarFormulario(this.criarOngEmBranco());
    }

    this.instituicaoDataService.currentMessageInstituicao.subscribe(
      (message) => {
        if (message != '') {
          this.selectedMessage = message;
        } else {
          this.router.navigate(['cadastro-instituicao']);
        }
      }
    );
  }

  private criarFormulario(ong: InstituicaoModel): void {
    this.formCadastro = this.fb.group({
      enderecoLogradouro: ['', [Validators.required]],
      enderecoCidade: ['', [Validators.required]],
      enderecoEstado: ['', [Validators.required]],
      enderecoNumero: ['', [Validators.required]],
      enderecoBairro: ['', [Validators.required]],
      enderecoComplemento: ['',],
      enderecoCep: ['', [Validators.required]],
    });
  }

  private criarOngEmBranco(): InstituicaoModel {
    return {} as InstituicaoModel;
  }

  trocaRota = (evento?) => {
    if (evento) {
      evento.target.innerText == 'Voltar'
        ? this.router.navigate(['cadastro-instituicao'])
        : this.router.navigate(['cadastro-instituicao-2']);
    } else {
      this.router.navigate(['cadastro-instituicao-2']);
    }
  };

  submit(): void {
    this.formCadastro.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
    if (this.formCadastro.invalid) {
      console.log('\n inválido form  ');
      return;
    }

    const ong = this.formCadastro.getRawValue() as InstituicaoModel; // retorna os campos que existem dentro do formGroup cadastro
    if (this.id) {
      ong.id = this.id;
      this.editar(ong);
    } else {
      console.log('salvar *** nome animal: ' + ong.nome);
      this.salvar(ong);
    }
  }
  private salvar(ong: InstituicaoModel) {
    if (this.selectedMessage != '') {
      Object.assign(ong, JSON.parse(this.selectedMessage));
      this.instituicaoDataService.changeMessage(JSON.stringify(ong));
      this.trocaRota();
    }
  }

  private editar(ong: InstituicaoModel) {
    if (this.selectedMessage != '') {
      Object.assign(ong, JSON.parse(this.selectedMessage));
      this.instituicaoDataService.changeMessage(JSON.stringify(ong));
      this.trocaRota();
    }
  }

  listarEstados() {
    this.repository.getAllEstados().subscribe((resposta) => {
      this.estados.push({ label: resposta.nome, value: resposta.id });
    });
  }

  listarCidades() {
    this.cidades = [];
    let id: number = this.formCadastro.value.enderecoEstado;
    this.repository.getAllCidadesByEstado(id).subscribe((resposta) => {
      this.cidades.push({ label: resposta.nome, value: resposta.id });
    });
  }
}
