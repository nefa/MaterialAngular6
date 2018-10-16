import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-test-form',
  templateUrl: './reactive-test-form.component.html',
  styleUrls: ['./reactive-test-form.component.scss']
})
export class ReactiveTestFormComponent implements OnInit {
  
  testForm: FormGroup;
  loading= false;
  success= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    // this.testForm = this.fb.group({
    //   email: '',
    //   message:'',
    //   homePhone: phone,
    //   cellPhone: phone,
    // });

    this.testForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]],
      amount: '',
      homePhone: phone,
      cellPhone: phone,
      otherPhonesA:this.fb.array([]),
    });
  }

  get email() {
    return this.testForm.get('email');
  }

  get password() {
    return this.testForm.get('password');
  }

  get age() {
    return this.testForm.get('age');
  }

  get otherPhones() {
    return this.testForm.get('otherPhonesA') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })

    this.otherPhones.push(phone);
  }

  async submitHandler() {
    this.loading = true;

    const formValue = this.testForm.value;

    try {
      // await this.af.collection('contacts').add(formValue);
      console.log(formValue);

      this.success = true;
    } catch (err) {
      console.error(err)
    }

    this.loading = false;
  }

  onRightClick($e) {
    // disable right click 
    return false;
  }
}
