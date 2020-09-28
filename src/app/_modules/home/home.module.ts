import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { AdminModule } from './../admin/admin.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './../../_shared/shared.module';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { SelecaoTipoCadastroComponent } from './pages/selecao-tipo-cadastro/selecao-tipo-cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaInstituicoesComponent } from './pages/lista-instituicoes/lista-instituicoes.component';


@NgModule({
  declarations: [HomeComponent, SobreNosComponent, SelecaoTipoCadastroComponent, InicioComponent, ListaInstituicoesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
    
  ]
})
export class HomeModule { }
