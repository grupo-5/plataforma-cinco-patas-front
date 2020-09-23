import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../_shared/shared.module';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AnimalCreateComponent } from './pages/instituicao/animal-create/animal-create.component';



@NgModule({
  declarations: [AdminComponent, AnimalCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    AnimalCreateComponent
  ]
})
export class AdminModule { }
