import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { CardDepoimentoComponent } from './components/card-depoimento/card-depoimento.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GraficoBarrasComponent } from './components/grafico-barras/grafico-barras.component';



@NgModule({
  declarations: [
    NavbarComponent,
    InputTextComponent,
    InputCheckboxComponent,
    InputRadioComponent,
    CardDepoimentoComponent,
    SidebarComponent,
    GraficoBarrasComponent
  
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
    GraficoBarrasComponent

  ]
})
export class SharedModule { }
