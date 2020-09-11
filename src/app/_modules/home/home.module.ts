import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './../../_shared/shared.module';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';





@NgModule({
  declarations: [HomeComponent, SobreNosComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
    
  ]
})
export class HomeModule { }
