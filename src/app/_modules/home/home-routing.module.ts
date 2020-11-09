import { CadastroAdotanteSegurancaComponent } from './pages/cadastro-adotante-seguranca/cadastro-adotante-seguranca.component';
import { OngCreateSegurancaComponent } from './pages/ong-create-seguranca/ong-create-seguranca.component';
import { OngCreateP3Component } from './pages/ong-create-p3/ong-create-p3.component';
import { OngCreateP2Component } from './../home/pages/ong-create-p2/ong-create-p2.component';
import { ListaInstituicoesComponent } from './pages/lista-instituicoes/lista-instituicoes.component';
import { CadastroAdotanteMatchComponent } from './pages/cadastro-adotante-match/cadastro-adotante-match.component';
import { LoginComponent } from './pages/seguranca/login/login.component';
import { CadastroAdotanteEnderecoComponent } from './pages/cadastro-adotante-endereco/cadastro-adotante-endereco.component';
import { CadastroAdotanteDadosComponent } from './pages/cadastro-adotante-dados/cadastro-adotante-dados.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SelecaoTipoCadastroComponent } from './pages/selecao-tipo-cadastro/selecao-tipo-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { OngCreateComponent } from '../home/pages/ong-create/ong-create.component';
import { ListaDepoimentosComponent } from './pages/lista-depoimentos/lista-depoimentos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      { path: '', component: InicioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'depoimentos', component: ListaDepoimentosComponent },
      { path: 'ongs-parceiras', component: SelecaoTipoCadastroComponent },
      { path: 'home-page', component: InicioComponent },
      { path: 'sobre-nos', component: SobreNosComponent },
      { path: 'instituicoes-parceiras', component: ListaInstituicoesComponent },
      { path: 'selecao-tipo-cadastro', component: SelecaoTipoCadastroComponent },
      { path: 'cadastro-instituicao', component: OngCreateComponent },
      { path: 'cadastro-instituicao-1', component: OngCreateP2Component },
      { path: 'cadastro-instituicao-2', component: OngCreateSegurancaComponent},
      { path: 'cadastro-instituicao-3', component: OngCreateP3Component },
      { path: 'cadastro-adotante', component: CadastroAdotanteDadosComponent},
      { path: 'cadastro-adotante-1', component: CadastroAdotanteEnderecoComponent },
      { path: 'cadastro-adotante-2', component: CadastroAdotanteSegurancaComponent},
      { path: 'cadastro-adotante-3', component: CadastroAdotanteMatchComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
