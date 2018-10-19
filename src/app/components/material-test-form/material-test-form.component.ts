import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-material-test-form',
  templateUrl: './material-test-form.component.html',
  styleUrls: ['./material-test-form.component.scss']
})
export class MaterialTestFormComponent implements OnInit {
  
  formOptions: FormGroup;
  materialForm: FormGroup;

  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.formOptions = this.fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

    this.materialForm = this.fb.group({
      user: ['', Validators.minLength(3)],
      code: ['', Validators.compose([
        Validators.minLength(3), 
        // Validators.maxLength(6),
      ])],
    });
  }

  get userF() {
    return this.materialForm.get('user');
  }

  get codeF() {
    return this.materialForm.get('code');
  }

  onCodeChange(value):void {
    if (value && value.length > 6) {
      this.codeF.setValue(value.slice(0, -1));
    }
  }

  onRightClickCode(e) {
  // <input (contextmenu)="onRightClickCode($event)">
  }



}
