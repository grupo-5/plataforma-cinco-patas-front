import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardTotalizadorComponent } from './components/card-totalizador/card-totalizador.component';


@NgModule({
  declarations: [
    NavbarComponent,
    CardTotalizadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ], exports:[
    NavbarComponent,
    CardTotalizadorComponent
  ]
})
export class SharedModule { }
