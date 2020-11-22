import { ValidarInputsService } from './../../../_services/validar-inputs.service';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent {

  @Input() titulo: string;
  @Input() tipo: string;
  @Input() placeholderInput: string;
  @Input() idInput: string;
  @Input() formGroup: FormGroup; 
  @Input() controlName: string;
  @Input() inputMask: string;

  constructor(public validacaoInputsService: ValidarInputsService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }
}
