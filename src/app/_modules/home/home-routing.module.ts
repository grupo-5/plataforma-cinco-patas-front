import { ListaInstituicoesComponent } from './pages/lista-instituicoes/lista-instituicoes.component';
import { QueroAjudarComponent } from './pages/quero-ajudar/quero-ajudar.component';
import { CadastroAdotanteMatchComponent } from './pages/cadastro-adotante-match/cadastro-adotante-match.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroAdotanteEnderecoComponent } from './pages/cadastro-adotante-endereco/cadastro-adotante-endereco.component';
import { CadastroAdotanteDadosComponent } from './pages/cadastro-adotante-dados/cadastro-adotante-dados.component';
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
      { path: '', component: InicioComponent },
      { path: 'selecao-tipo-cadastro',   component: SelecaoTipoCadastroComponent },
      { path: 'login', component: LoginComponent },
      { path: 'quero-ajudar', component: QueroAjudarComponent },
      { path: 'depoimentos', component: SelecaoTipoCadastroComponent },
      { path: 'lista-depoimentos', component: SelecaoTipoCadastroComponent },
      { path: 'ongs-parceiras', component: SelecaoTipoCadastroComponent },
      { path: 'cadastro-instituicao', component: SobreNosComponent },
      { path: 'cadastro-adotante', component: SobreNosComponent },
      { path: 'home-page', component: InicioComponent },      
      { path: 'sobre-nos', component: SobreNosComponent},
      { path: 'instituicoes-parceiras', component: ListaInstituicoesComponent},
      { path: 'cadastro-adotante', component: CadastroAdotanteDadosComponent },
      { path: 'cadastro-adotante-endereco', component: CadastroAdotanteEnderecoComponent },
      { path: 'cadastro-adotante-match', component: CadastroAdotanteMatchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
