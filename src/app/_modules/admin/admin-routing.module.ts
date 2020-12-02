import { ConfimacaoSolicitacaoComponent } from './pages/pessoa/confimacao-solicitacao/confimacao-solicitacao.component';
import { AuthGuard } from './../home/pages/seguranca/auth.guard';
import { ListagemSolicitacoesComponent } from './pages/instituicao/listagem-solicitacoes/listagem-solicitacoes.component';
import { CadastroDepoimentosComponent } from './pages/pessoa/cadastro-depoimentos/cadastro-depoimentos.component';
import { DashboardPessoaComponent } from './pages/pessoa/dashboard-pessoa.component';
import { AnimalCreateP3Component } from './pages/instituicao/animal-create-p3/animal-create-p3.component';
import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { ListagemUsuariosComponent } from './pages/instituicao/listagem-usuarios/listagem-usuarios.component';
import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/instituicao/dashboard/dashboard.component';
 
const routes: Routes = [
    {   path: '', component: AdminComponent,
        children :[
            { path: '', component: DashboardComponent },
            { path: 'animais', component: ListagemAnimaisComponent, canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'instituicao', component: DashboardComponent, canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'pessoa', component: DashboardPessoaComponent,canActivate:[AuthGuard], data: { roles: ['CP01'] }},
            { path: 'pessoa/:id', component: DashboardPessoaComponent,canActivate:[AuthGuard], data: { roles: ['CP01'] }},
            { path: 'cadastro-animal-1', component: AnimalCreateComponent,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-animal-1/:id', component: AnimalCreateComponent,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-animal-2', component: AnimalCreateP2Component,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-animal-2/:id', component: AnimalCreateP2Component,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-animal-3', component: AnimalCreateP3Component,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-animal-3/:id', component: AnimalCreateP3Component,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'pessoas', component: ListagemUsuariosComponent,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'solicitacoes', component: ListagemSolicitacoesComponent,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'solicitacoes/:id', component: ListagemSolicitacoesComponent,canActivate:[AuthGuard], data: { roles: ['CP02'] }},
            { path: 'cadastro-depoimento', component: CadastroDepoimentosComponent, canActivate:[AuthGuard], data: { roles: ['CP01'] }},
            { path: 'cadastro-depoimento:id', component: CadastroDepoimentosComponent, canActivate:[AuthGuard], data: { roles: ['CP01'] }},
            { path: 'confirmar-solicitacao', component: ConfimacaoSolicitacaoComponent, canActivate:[AuthGuard], data: { roles: ['CP01'] }},
        ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }