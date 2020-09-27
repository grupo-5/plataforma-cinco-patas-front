import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';
import { AnimalCreateP2Component } from './pages/instituicao/animal-create-p2/animal-create-p2.component';

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
            { path: 'pessoas', component: AnimalCreateComponent},
                 ],
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }