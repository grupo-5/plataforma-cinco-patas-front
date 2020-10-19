import { DashboardPessoaComponent } from './pages/pessoa/dashboard-pessoa.component';
import { AnimalCreateP3Component } from './pages/instituicao/animal-create-p3/animal-create-p3.component';
import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/instituicao/dashboard.component';
 
const routes: Routes = [
    {   path: '', component: AdminComponent,
        children :[
            { path: 'instituicao', component: DashboardComponent},
            { path: 'pessoa', component: DashboardPessoaComponent},
            { path: 'cadastro-animal-1', component: AnimalCreateComponent},
            { path: 'cadastro-animal-2', component: AnimalCreateP2Component},
            { path: 'cadastro-animal-3', component: AnimalCreateP3Component},
            { path: 'pessoas', component: ListagemAnimaisComponent},
            { path: 'animais', component: ListagemAnimaisComponent},
                 ],
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }