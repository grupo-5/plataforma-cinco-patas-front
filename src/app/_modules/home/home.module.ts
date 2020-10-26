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
import { ListaDepoimentosComponent } from './pages/lista-depoimentos/lista-depoimentos.component';
import { ListaInstituicoesComponent } from './pages/lista-instituicoes/lista-instituicoes.component';
import { CadastroAdotanteDadosComponent } from './pages/cadastro-adotante-dados/cadastro-adotante-dados.component';
import { CadastroAdotanteEnderecoComponent } from './pages/cadastro-adotante-endereco/cadastro-adotante-endereco.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroAdotanteMatchComponent } from './pages/cadastro-adotante-match/cadastro-adotante-match.component';
import { QueroAjudarComponent } from './pages/quero-ajudar/quero-ajudar.component';
import { OngCreateComponent } from './pages/ong-create/ong-create.component';
import { OngCreateP2Component } from './pages/ong-create-p2/ong-create-p2.component';
import { OngCreateP3Component } from './pages/ong-create-p3/ong-create-p3.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreNosComponent,
    SelecaoTipoCadastroComponent,
    InicioComponent,
    ListaInstituicoesComponent,
    ListaDepoimentosComponent,
    CadastroAdotanteDadosComponent,
    CadastroAdotanteEnderecoComponent,
    LoginComponent,
    CadastroAdotanteMatchComponent,
    QueroAjudarComponent,
    OngCreateComponent,
    OngCreateP2Component,
    OngCreateP3Component,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
  ],
})
export class HomeModule {}
