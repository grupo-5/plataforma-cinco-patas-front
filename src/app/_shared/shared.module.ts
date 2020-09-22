import { ChartsModule } from 'ng2-charts';
import { GraficoRosquinhaComponent } from './components/grafico-rosquinha/grafico-rosquinha.component';
import { CardListaComponent } from './components/card-lista/card-lista.component';
import { CardIncentivoComponent } from './components/card-incentivo/card-incentivo.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { CardDepoimentoComponent } from './components/card-depoimento/card-depoimento.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';

import { CardTotalizadorComponent } from './components/card-totalizador/card-totalizador.component';
import { InputComboboxComponent } from './components/input-combobox/input-combobox.component';
import { CardGraficoComponent } from './components/card-grafico/card-grafico.component';
import { ImagemPaginacaoComponent } from './components/imagem-paginacao/imagem-paginacao.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';


@NgModule({
  declarations: [
    NavbarComponent,
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
    FormTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule

  ], exports:[
    NavbarComponent,
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
    FormTextareaComponent
  ]
})
export class SharedModule { }
