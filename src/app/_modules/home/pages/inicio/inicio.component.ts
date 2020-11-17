import { ModalInfoComponent } from './../../../../_shared/components/modal-info/modal-info.component';
import { ModalService } from './../../../../_services/modal.service';
import { AnimalModel } from './../../../../_core/model/animal-model';
import { AnimalRepository } from './../../../../_core/repository/animal-repository';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  @ViewChild("md") md: ModalInfoComponent;
  searchResult = [{ imgUrl: '../../../../assets/images/cat-1.jpg' }];

  formBuscaHome: FormGroup;
  listaPassos = ['Dados Pessoais', 'Endereco', 'Match'];
  disabled = false;
  listaEspecie = ['Dados Pessoais', 'Endereco', 'Match'];
  listaEstado = ['Dados Pessoais', 'Endereco', 'Match'];
  listaCidade = ['Dados Pessoais', 'Endereco', 'Match'];
  listaPorte = ['Dados Pessoais', 'Endereco', 'Match'];
  
  listAnimais:any=[]
  constructor(private route: Router, private fb: FormBuilder,public  repository:AnimalRepository) {}

  ngOnInit(): void {
    this.criaFormulario();

   
    this.getAnimals()
   
  }
  open(item) {
    this.md.open(item);
  }

  criaFormulario = () => {
    this.formBuscaHome = this.fb.group({
      especie: [''],
      porte: [''],
      estado: [''],
      cidade: [''],
     
    });
  };

  botoesAcoes = (evento) => {
    evento.target.innerText == 'Buscar'
      ? this.route.navigate(['cadastro-adotante-endereco'])
      : this.route.navigate(['cadastro-adotante-match']);
  };
  
  getAnimals(){
    this.repository.getAllAnimais().subscribe(
      (resp:any)=> {this.addArray(resp)}   )
  }



  addArray(item){
    this.listAnimais.push(item)

  }
 
}
