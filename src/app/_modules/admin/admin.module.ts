import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from './../../_shared/shared.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { CadastroDepoimentosComponent } from './pages/pessoa/cadastro-depoimentos/cadastro-depoimentos.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';
import { DashboardComponent } from './pages/instituicao/dashboard.component';
import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { AnimalCreateP3Component } from './pages/instituicao/animal-create-p3/animal-create-p3.component';



@NgModule({
  
  declarations: [AdminComponent, AnimalCreateComponent, DashboardComponent, AnimalCreateP2Component, CadastroDepoimentosComponent, ListagemAnimaisComponent, AnimalCreateP3Component],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ], exports: [
    AnimalCreateComponent,
    CadastroDepoimentosComponent,
    AnimalCreateP2Component,
    DashboardComponent,
    ListagemAnimaisComponent,
    AnimalCreateP3Component
  ]
})
export class AdminModule { }
