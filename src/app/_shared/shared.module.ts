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
import { CardTotalizadorComponent } from './components/card-totalizador/card-totalizador.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardTotalizadorComponent,
    FooterComponent,
    CardIncentivoComponent,
    CardListaComponent,
    GraficoRosquinhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ], exports:[
    NavbarComponent,
    CardTotalizadorComponent,
    FooterComponent,
    CardIncentivoComponent,
    CardListaComponent,
    GraficoRosquinhaComponent
  ]
})
export class SharedModule { }
