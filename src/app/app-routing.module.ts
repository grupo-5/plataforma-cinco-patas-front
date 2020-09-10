import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren: () => import('./_modules/home/home.module').then(m => m.HomeModule)
},
{
  path: 'admin',
  loadChildren: () => import('./_modules/admin/admin.module').then(m => m.AdminModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
