import { FormGroup, AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.css']
})
export class FormTextareaComponent implements OnInit {
  @Input() titulo :string;
  @Input() idTextarea: string;
  @Input() formGroup: FormGroup; 
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }


  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
