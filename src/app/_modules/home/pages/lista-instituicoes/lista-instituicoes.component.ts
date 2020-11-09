import { InstituicaoModel } from './../../../../_core/model/instituicao-model';
import { EnderecoRepository } from './../../../../_core/repository/endereco-repository ';
import { InstituicaoRepository } from './../../../../_core/repository/instituicao-repository';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-instituicoes',
  templateUrl: './lista-instituicoes.component.html',
  styleUrls: ['./lista-instituicoes.component.css']
})
export class ListaInstituicoesComponent implements OnInit {

  formPesquisa: FormGroup;
  estados: any[] = [];
  cidades: any[] = [];
  listaInstituicoes: any[] = [];
  // lista: any[] = [
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   },
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   },
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   },
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   },
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   },
  //   {
  //     "nome": "Instituição Apoiadora de animais",
  //     "nomeCidade": "Sao carlos - sp",
  //     "caminho": "./../../../../../assets/images/dog-2.jpg",
  //   }
  // ];

  constructor(private fb: FormBuilder,
              public instituicaoReposiyory: InstituicaoRepository,
              public enderecoReposiyory: EnderecoRepository,
              
              ) { }

  ngOnInit(): void {
   
    this.formPesquisa = this.fb.group({
      cidade: [''],
      estado: [''],
    });

    this.listarEstados();
    this.carregaInstituicoes();
  }

  // valida(): void {
  //   this.formPesquisa.markAllAsTouched(); // Faz parecer que todos os campos foram clicados
  //   if (this.formPesquisa.invalid) {
  //     console.log('\n inválido form  ');
  //     return;
  //   }
  // }

  listarEstados() {
    this.estados = [];
    this.estados[0] = '';
    this.enderecoReposiyory.getAllEstados().subscribe((resposta) => {
      this.estados.push({ label: resposta.nome, value: resposta.id });
    });
  }

  listarCidades() {
    this.cidades = [];
    this.cidades[0] =  '';
    let id: number = this.formPesquisa.value.estado;
    if(id > 0 ){
      this.enderecoReposiyory.getAllCidadesByEstado(id).subscribe((resposta) => {
        this.cidades.push({ label: resposta.nome, value: resposta.id });
        console.log(this.cidades);
      });
    }
  }

  carregaInstituicoes() {
    this.listaInstituicoes = [];
    
    let id: number = this.formPesquisa.value.cidade;
    console.log(id);
    if(id <= 0){
      this.instituicaoReposiyory.getAllInstituicoes().then((resposta) => {
        this.listaInstituicoes = resposta;
        console.log(this.listaInstituicoes);
      });
    }else{
      this.instituicaoReposiyory.getInstituicoesCidade(id).then((resposta) => {
        // this.listaInstituicoes.push();
        this.listaInstituicoes = resposta;
        console.log(this.listaInstituicoes);
      });
    }
  }
}
