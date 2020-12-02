import { SegurancaModule } from './../home/pages/seguranca/seguranca.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './../../_shared/shared.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { CadastroDepoimentosComponent } from './pages/pessoa/cadastro-depoimentos/cadastro-depoimentos.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';
import { DashboardComponent } from './pages/instituicao/dashboard/dashboard.component';
import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { ListagemUsuariosComponent } from './pages/instituicao/listagem-usuarios/listagem-usuarios.component';
import { AnimalCreateP3Component } from './pages/instituicao/animal-create-p3/animal-create-p3.component';
import { DashboardPessoaComponent } from './pages/pessoa/dashboard-pessoa.component';
import { ListagemSolicitacoesComponent } from './pages/instituicao/listagem-solicitacoes/listagem-solicitacoes.component';
import { ConfimacaoSolicitacaoComponent } from './pages/pessoa/confimacao-solicitacao/confimacao-solicitacao.component';
import { MeusDepoimentosComponent } from './pages/pessoa/meus-depoimentos/meus-depoimentos.component';

@NgModule({
  declarations: [
    AdminComponent,
    AnimalCreateComponent,
    DashboardComponent,
    AnimalCreateP2Component,
    CadastroDepoimentosComponent,
    ListagemAnimaisComponent,
    AnimalCreateP3Component,
    ListagemUsuariosComponent,
    DashboardPessoaComponent,
    ListagemSolicitacoesComponent,
    ConfimacaoSolicitacaoComponent,
    MeusDepoimentosComponent,

  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SegurancaModule
  ],
  exports: [
    AnimalCreateComponent,
    CadastroDepoimentosComponent,
    AnimalCreateP2Component,
    DashboardComponent,
    ListagemAnimaisComponent,
    ListagemUsuariosComponent,
    AnimalCreateP3Component,
    DashboardPessoaComponent,
    ListagemSolicitacoesComponent,
    ConfimacaoSolicitacaoComponent,
    MeusDepoimentosComponent,
  ],
})
export class AdminModule {}
