import { SharedModule } from './../../../../_shared/shared.module';
import { environment } from './../../../../../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SegurancaRoutingModule } from './seguranca-routing.modules';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SegurancaRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  providers:[
    AuthService,
    AuthGuard,
  ],
  exports:[
    LoginComponent
  ]
})
export class SegurancaModule { }