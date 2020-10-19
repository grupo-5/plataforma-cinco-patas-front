import { ValidarInputsService } from './../../../_services/validar-inputs.service';
import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent {

  @Input() titulo: string;
  @Input() texto_opcoes: Array<string>;
  @Input() idRadio: string;
  @Input() nomeRadio: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  


  constructor(public validacaoInputsService: ValidarInputsService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
