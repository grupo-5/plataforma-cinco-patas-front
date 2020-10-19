import { ValidarInputsService } from './../../../_services/validar-inputs.service';
import { FormGroup, AbstractControl, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css'],
})
export class InputCheckboxComponent {
  @Input() titulo: string;
  @Input() texto_opcoes: Array<string>;
  @Input() idCheckBox: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Output() checked = new EventEmitter();

  constructor(public validacaoInputsService: ValidarInputsService) {

  }

  get formControl():AbstractControl {
    return this.formGroup.controls[this.controlName] ;
  }

  

  isChecked(event) {
    this.checked.emit(event);
  }
}
