import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class Config { //as Configuration model
  id:string | number;
  maxLength?:number;
  minLength?:number;
  label?:string;
  validators?:any[];
  errorText?:string;
  errorStyle?:{ [k: string]: string; }/**stringMap*/;

  constructor(config={}) {
    Object.assign(this, config);
  }
}

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent implements OnInit, OnChanges {

  @Input() inputvalue = '';
  @Input() config: Config = {id: 'rand1'};
  @Output() changeValue$ = new EventEmitter<any>();
  @Output() blurInput$ = new EventEmitter<any>();


  numberInputFormGroup: FormGroup

  constructor(private fb:FormBuilder) {}

  ngOnInit() {
    this.numberInputFormGroup = this.fb.group({
      _inputValue: [this.inputvalue, this.config.validators || []]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  get control() {
    return this.numberInputFormGroup.get('_inputValue');
  }

  onChangeValue(e:string) {
    /** implement a restriction for max possible chars*/
    this.applyLimits(e);
    this.changeValue$.emit(this.control);
  }

  onBlur(e) {
    /** other ops ...*/
    this.blurInput$.emit(this.control);
  }

  applyLimits(val:string) {
    if (this.config.maxLength && val && val.length >= this.config.maxLength) {
      this.control.setValue(val.slice(0, -1));
    }
  }

}

/** extend to -> 
 *  model formatting based on coma/dot decimal
 *  format on blur
 *  max 2 decimal for model
 *  apply model limits
 */
