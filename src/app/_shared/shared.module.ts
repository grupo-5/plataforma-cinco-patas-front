import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './layout/navbar/navbar.component';
import { ButtonGComponent } from './components/button-g/button-g.component';
import { ButtonBComponent } from './components/button-b/button-b.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ButtonGComponent,
    ButtonBComponent,
    ModalInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ], exports:[
    NavbarComponent,
    ButtonGComponent,
    ButtonBComponent,
    ModalInfoComponent
  ]
})
export class SharedModule { }
