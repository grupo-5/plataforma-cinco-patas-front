import { ListagemAnimaisComponent } from './pages/instituicao/listagem-animais/listagem-animais.component';
import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';
import { OngCreateP2Component } from './pages/instituicao/ong-create-p2/ong-create-p2.component';
import { OngCreateComponent } from './pages/instituicao/ong-create/ong-create.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/instituicao/dashboard.component';
 
const routes: Routes = [
    {   path: '', component: AdminComponent,
        children :[
            { path: '/users', component: AdminComponent},
            { path: 'instituicao', component: DashboardComponent},
            { path: 'cadastro-animal-1', component: AnimalCreateComponent},
            { path: 'cadastro-animal-2', component: AnimalCreateP2Component},
            { path: 'cadastro-ong-2', component: OngCreateP2Component},
            { path: 'cadastro-ong-1', component: OngCreateComponent},
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