import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './layout/navbar/navbar.component';
import { InputComboboxComponent } from './components/input-combobox/input-combobox.component';


@NgModule({
  declarations: [
    NavbarComponent,
    InputComboboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ], exports:[
    NavbarComponent,
    InputComboboxComponent
  ]
})
export class SharedModule { }
