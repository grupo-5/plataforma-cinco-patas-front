import { ModalInfoComponent } from './../../../../_shared/components/modal-info/modal-info.component';
import { AnimalFiltroModel } from './../../../../_core/model/animal-filtro-model';
import { AnimalRepository } from './../../../../_core/repository/animal-repository';
import { EnderecoRepository } from './../../../../_core/repository/endereco-repository ';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  
  formBuscaHome: FormGroup;
  listAnimais = [];
  animais = [];
  disabled = false;
  listaSexo = ['', 'Fêmea', 'Macho'];
  listaEspecie = ['', 'Cachorro', 'Gato'];
  listaEstado = [];
  listaCidade = [];
  listaPorte = ['', 'P', 'M', 'G'];
  estados: any[] = [];
  cidades: any[] = [];

  @ViewChild("md") md: ModalInfoComponent;

  constructor(private route: Router,
    private fb: FormBuilder,
    public enderecoReposiyory: EnderecoRepository,
    public animalRepository: AnimalRepository) { }

  ngOnInit(): void {
    this.criaFormulario();
    this.listarEstados();
    this.carregaAnimais();
  }

  criaFormulario = () => {
    this.formBuscaHome = this.fb.group({
      especie: [''],
      porte: [''],
      sexo: [''],
      estado: [''],
      cidade: [''],

    });
  };

  open(item) {
    this.md.open(item);
  }
  
  listarEstados() {
    this.estados = [];
    this.estados[0] = '';
    this.enderecoReposiyory.getAllEstados().subscribe((resposta) => {
      this.estados.push({ label: resposta.nome, value: resposta.id });
    });
  }

  listarCidades() {
    this.cidades = [];
    this.cidades[0] = '';
    let id: number = this.formBuscaHome.value.estado;
    if (id > 0) {
      this.enderecoReposiyory.getAllCidadesByEstado(id).subscribe((resposta) => {
        this.cidades.push({ label: resposta.nome, value: resposta.id });
        console.log(this.cidades);
      });
    }
  }

  carregaAnimais() {
    this.listAnimais = [];
    var busca = new String("")

    const dados = {
      estado: this.formBuscaHome.value.estado,
      cidade: this.formBuscaHome.value.cidade,
      sexo: this.formBuscaHome.value.sexo,
      porte: this.formBuscaHome.value.porte,
      especie: this.formBuscaHome.value.especie,
    } as AnimalFiltroModel;

    if (dados.porte.length) {
      busca = busca.concat("porte=" + this.formBuscaHome.value.porte + "&");
    } if (dados.especie.length) {
      busca = busca.concat("especie=" + this.formBuscaHome.value.especie + "&");
    } if (dados.sexo.length) {
      busca = busca.concat("sexo=" + this.formBuscaHome.value.sexo + "&");
    } if (this.formBuscaHome.value.estado != null) {
      busca = busca.concat("estado=" + this.formBuscaHome.value.estado + "&");
    } if (this.formBuscaHome.value.cidade != null) {
      busca = busca.concat("cidade=" + this.formBuscaHome.value.cidade);
    }

    this.animalRepository.getAnimalByFiltro(busca).subscribe(resposta => {
      this.listAnimais.push({ imgUrl: resposta.imagem.url });
      console.log(resposta);
    });
  }
 
}
