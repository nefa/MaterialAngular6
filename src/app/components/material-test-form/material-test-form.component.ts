import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormControl, FormArray } from '@angular/forms';


const minSelectedCheckboxes = (min = 1) => {
  const validator = formArray => {
    const total = formArray.controls.map(c => c.value).reduce((acc, current)=> current ? acc + current: acc, 0);

    return total >= min ? null : { required: true };
  };

  return validator;
}; 

@Component({
  selector: 'app-material-test-form',
  templateUrl: './material-test-form.component.html',
  styleUrls: ['./material-test-form.component.scss']
})
export class MaterialTestFormComponent implements OnInit {
  
  formOptions: FormGroup;
  materialForm: FormGroup;
  selectedTemplate = '';
  isMaterialFormSubmited = false;
  templates = [
    { id: 1, templateA: 'url1', selected: false }, 
    { id: 2, templateA: 'url2', selected: false },
    { id: 3, templateA: 'url3', selected: false }
  ];

  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.formOptions = this.fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });

    const _pOptions = this.templates.map(t => new FormControl(false))
    _pOptions[0].setValue(true);



    this.materialForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(6),
      ])],
      // templates: this.fb.array(this.templates.map(t => this.fb.control(t)), Validators.required) || [],
      gender: ['', Validators.required],
      // paymentOptions: this.fb.array(this.templates.map(templ => this.fb.control(templ))),
      paymentOptions: new FormArray(_pOptions, minSelectedCheckboxes(1)),
    });
  }

  get userF() {
    return this.materialForm.get('user');
  }

  get codeF() {
    return this.materialForm.get('code');
  }

  get templatesF() {
    return this.materialForm.get('templates');
  }

  get paymentOptionsF() {
    return this.materialForm.get('paymentOptions');
  }

  onCodeChange(value):void {
    if (value && value.length > 6) {
      this.codeF.setValue(value.slice(0, -1));
    }
  }

  onRightClickCode(e) {
  // <input (contextmenu)="onRightClickCode($event)">
  }

  onSubmit() {
    this.isMaterialFormSubmited = true;
    console.log(this.materialForm);
  }



}
