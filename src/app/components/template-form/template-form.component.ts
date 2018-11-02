import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface IDeserializable {
  deserialize(props: any): this;
}

export class Option implements IDeserializable {
  selected:boolean;
  id:number|string;
  title:string;
  
  deserialize(props) {
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
  _options = [];
  simpleText = '';

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    //set collecntions maybe async...
    this.options = templates;

    // this.simpleForm = this.fb.group({
    //   options: this.fb.array(this._options)
    // })
  }

  ngOnChanges(changes:SimpleChanges ) {
    // update/set collections here
  }

  set options(options) {
    this._options = options.map(o => new Option().deserialize(o));
  }

  get options() {
    return this._options;
  }

  onSubmit(f) {
    // console.log(this.options);
    console.log(f.controls);
    
  }
}
