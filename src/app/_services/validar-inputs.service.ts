import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarInputsService {

  constructor() { }

  hasErrorValidar(control: AbstractControl, errorName: string): boolean {
    if ((control.dirty || control.touched) && this.hasError(control, errorName)) { // Se o campo está sujo ou selecionado e possue erro
      return true;
    }
    return false;
  }

  hasError(control: AbstractControl, errorName: string): boolean {
    return control.hasError(errorName);
  }

  lengthValidar(control: AbstractControl, errorName: string): number { // Serve para verificar o tamanho da string passada no formulário, deixando as mensagens dinamicas
    const error = control.errors[errorName];
    return error.requiredLength || error.min || error.max || 0;
  }

}
