import { ValidarInputsService } from './../../../_services/validar-inputs.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-combobox',
  templateUrl: './input-combobox.component.html',
  styleUrls: ['./input-combobox.component.css']
})
export class InputComboboxComponent implements OnInit {

  @Input() titulo: string;
  @Input() lista: Array<string>;
  @Input() idSelect: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;

  constructor(public validacaoInputsService: ValidarInputsService) { }

  ngOnInit(): void {
  }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
 