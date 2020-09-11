import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
 
const routes: Routes = [
  { path: '',   component: HomeComponent,

  children : [
    { path: 'sobre-nos', component : SobreNosComponent },

]},

  
 
];
 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
 