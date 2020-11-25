import { ConfimacaoSolicitacaoComponent } from './../admin/pages/pessoa/confimacao-solicitacao/confimacao-solicitacao.component';
import { ModalService } from './../../_services/modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { AdminModule } from './../admin/admin.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './../../_shared/shared.module';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { SelecaoTipoCadastroComponent } from './pages/selecao-tipo-cadastro/selecao-tipo-cadastro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaDepoimentosComponent } from './pages/lista-depoimentos/lista-depoimentos.component';
import { ListaInstituicoesComponent } from './pages/lista-instituicoes/lista-instituicoes.component';
import { CadastroAdotanteDadosComponent } from './pages/cadastro-adotante-dados/cadastro-adotante-dados.component';
import { CadastroAdotanteEnderecoComponent } from './pages/cadastro-adotante-endereco/cadastro-adotante-endereco.component';
import { CadastroAdotanteMatchComponent } from './pages/cadastro-adotante-match/cadastro-adotante-match.component';
import { OngCreateComponent } from './pages/ong-create/ong-create.component';
import { OngCreateP2Component } from './pages/ong-create-p2/ong-create-p2.component';
import { OngCreateP3Component } from './pages/ong-create-p3/ong-create-p3.component';
import { SegurancaModule } from './pages/seguranca/seguranca.module';
import { CadastroAdotanteSegurancaComponent } from './pages/cadastro-adotante-seguranca/cadastro-adotante-seguranca.component';
import { OngCreateSegurancaComponent } from './pages/ong-create-seguranca/ong-create-seguranca.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreNosComponent,
    SelecaoTipoCadastroComponent,
    InicioComponent,
    ListaInstituicoesComponent,
    ListaDepoimentosComponent,
    CadastroAdotanteDadosComponent,
    CadastroAdotanteEnderecoComponent,
    CadastroAdotanteMatchComponent,
    OngCreateComponent,
    OngCreateP2Component,
    OngCreateP3Component,
    CadastroAdotanteSegurancaComponent,
    OngCreateSegurancaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    SegurancaModule,
  ],
  providers: [ModalService, ConfimacaoSolicitacaoComponent]
})
export class HomeModule {}
