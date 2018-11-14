import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Config as InputNrCptConfig } from '../common/number-input/number-input.component';

export interface IDeserializable {
  deserialize?(props: any): this;
}

export class Option implements IDeserializable {
  selected:boolean;
  id:number|string;
  title:string;
  
  deserialize?(props) {
    Object.assign(this, props);
    return this;
  }
}

const templates = [
  { id: 1, title: 'url1', selected: false },
  { id: 2, title: 'url2', selected: false },
  { id: 3, title: 'url3', selected: false }
];

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit, OnChanges {

  simpleForm: FormGroup;
  _options: Option[];
  simpleText = '';
  numberCpVal = '';
  numberCpConf: InputNrCptConfig;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    //set collecntions maybe async...
    this.options = templates;

    this.numberCpConf = new InputNrCptConfig({
      id:'123rand',
      label: 'test label 1',
      errorText: 'replace error text here',
      errorStyle: { 'border': 'solid 1px red', 'color': 'red' },
      validators: [/** Validators.minLength(3), Validators.required*/]
    })
    // this.simpleForm = this.fb.group({
    //   options: this.fb.array(this._options)
    // })
  }

  ngOnChanges(changes:SimpleChanges) {
    // update/set collections here
  }

  set options(options) {
    this._options = options.map(o => new Option().deserialize(o));
  }

  get options() {
    return this._options;
  }

  onNumberChange(e: FormControl) {
    console.log('by change ---->', e);
  }

  onNumberInputBlur(e: FormControl) {
    console.log('by blur <---', e);
  }

  onSubmit(f) {
    // console.log(this.options);
    console.log(f.controls);
    
  }
}
