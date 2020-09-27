import { InicioComponent } from './pages/inicio/inicio.component';
import { SelecaoTipoCadastroComponent } from './pages/selecao-tipo-cadastro/selecao-tipo-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      { path: 'sobre-nos', component: SobreNosComponent },
      {
        path: 'selecao-tipo-cadastro',
        component: SelecaoTipoCadastroComponent,
      },
      { path: 'quero-ajudar', component: SelecaoTipoCadastroComponent },
      { path: 'depoimentos', component: SelecaoTipoCadastroComponent },
      { path: 'ongs-parceiras', component: SelecaoTipoCadastroComponent },
      { path: 'cadastro-instituicao', component: SobreNosComponent },
      { path: 'cadastro-adotante', component: SobreNosComponent },
      { path: 'home-page', component: InicioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
