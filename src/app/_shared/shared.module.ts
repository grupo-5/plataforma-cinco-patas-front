import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './layout/footer/footer.component';
import { GraficoRosquinhaComponent } from './components/grafico-rosquinha/grafico-rosquinha.component';
import { CardListaComponent } from './components/card-lista/card-lista.component';
import { CardIncentivoComponent } from './components/card-incentivo/card-incentivo.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ButtonGComponent } from './components/button-g/button-g.component';
import { ButtonBComponent } from './components/button-b/button-b.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { CardDepoimentoComponent } from './components/card-depoimento/card-depoimento.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';
import { CardTotalizadorComponent } from './components/card-totalizador/card-totalizador.component';
import { InputComboboxComponent } from './components/input-combobox/input-combobox.component';
import { CardGraficoComponent } from './components/card-grafico/card-grafico.component';
import { ImagemPaginacaoComponent } from './components/imagem-paginacao/imagem-paginacao.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { HeaderComCarrosselComponent } from './components/header-com-carrossel/header-com-carrossel.component';
import { CardSobreNosComponent } from './components/card-sobre-nos/card-sobre-nos.component';
import { CardTimelineComponent } from './components/card-timeline/card-timeline.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadDeImagensComponent } from './components/upload-de-imagens/upload-de-imagens.component';

import { ListagemComponent } from './components/listagem/listagem.component';
import { CardInstituicaoComponent } from './components/card-instituicao/card-instituicao.component';
import { CardAdotanteComponent } from './components/card-adotante/card-adotante.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonGComponent,
    ButtonBComponent,
    ModalInfoComponent,
    InputTextComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    CardDepoimentoComponent,
    SidebarComponent,
    GraficoBarrasComponent,
    CardTotalizadorComponent,
    FooterComponent,
    CardIncentivoComponent,
    CardListaComponent,
    GraficoRosquinhaComponent,
    InputComboboxComponent,
    CardGraficoComponent,
    ImagemPaginacaoComponent,
    HeaderComCarrosselComponent,
    CardSobreNosComponent,
    CardTimelineComponent,
    FormTextareaComponent,
    UploadDeImagensComponent,
    ListagemComponent,
    CardInstituicaoComponent,
    CardAdotanteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule, 
    NgbModule,
    RouterModule

  ], exports:[
    NavbarComponent,
    ButtonGComponent,
    ButtonBComponent,
    ModalInfoComponent,
    InputTextComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    CardDepoimentoComponent,
    SidebarComponent,
    GraficoBarrasComponent,
    CardTotalizadorComponent,
    FooterComponent,
    CardIncentivoComponent,
    CardListaComponent,
    GraficoRosquinhaComponent,
    InputComboboxComponent,
    CardGraficoComponent,
    ImagemPaginacaoComponent,
    FormTextareaComponent,
    HeaderComCarrosselComponent,
    CardSobreNosComponent,
    CardTimelineComponent,
    ListagemComponent,
    CardInstituicaoComponent,
    CardAdotanteComponent,
    UploadDeImagensComponent,
    CardIncentivoComponent
  ]
})
export class SharedModule { }
