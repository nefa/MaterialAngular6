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

  static InputMaxLength(max: number): ValidatorFn {
    return (control: AbstractControl): {[key:string]:any} | null => {
      
      if(control.value && control.value.length >= max) {
        console.log(control.value);
        return {'maxL':{value:control.value.slice(0, -1)}};
      }

      return null;
    }
  }

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
        Validators.maxLength(5), 
        MaterialTestFormComponent.InputMaxLength(5)
      ])],
    });
  }

  get userF() {
    return this.materialForm.get('user');
  }

  get codeF() {
    return this.materialForm.get('code');
  }

  onChangeInput(e: KeyboardEvent) {
    const _val = (<HTMLInputElement>e.target).value;
    // if (_val.length >= 10) {
    //   console.log(_val);
    //   e.preventDefault();
    // }

    // <input (keydown)="onChangeInput($event)" >
  }

  // dataChanged(value) {
    // if (value && value.length > 6) {
    //   this.codeF.setValue(value.slice(0, -1));
    // }
    
    //<input [(ngModel)]="code" (ngModelChange)="dataChanged($event)">
  // }



}
