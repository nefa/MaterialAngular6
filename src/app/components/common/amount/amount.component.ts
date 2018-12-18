import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { NumberInputComponent } from '../number-input/number-input.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const PADDING = '00';
@Pipe({
  name: 'floatNumber'
})
export class FloatNumnberPipe implements PipeTransform {
  DECIMAL_SEPARATOR: string;
  THOUSANDS_SEPARATOR: string;

  constructor() {
    // TODO comes from configuration settings
    this.DECIMAL_SEPARATOR = '.';
    this.THOUSANDS_SEPARATOR = ',';
  }

  transform(value: number | string, fractionSize: number = 2): string {
    const ds = '.';
    const ts = ',';
    let [integer, fraction = ''] = (value || '').toString()
      .split(ds);

    fraction = fractionSize > 0
      ? ds + (fraction + PADDING).substring(0, fractionSize)
      : '';

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ts);
    integer = integer ? integer : '0';
    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 3): string {
    const ds = '.';
    const ts = ',';
    let [integer, fraction = ''] = (value || '').split(ds);

    integer = integer.replace(new RegExp(ts, 'g'), '');

    fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
      ? ds + (fraction + PADDING).substring(0, fractionSize)
      : '';
    integer = integer ? integer : '0';
    return integer + fraction;
  }
}

@Component({
  selector: 'app-input-amount',
  // templateUrl: '../number-input/number-input.component.html',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent extends NumberInputComponent /*implements OnInit*/ {
  /**override Input, Ouptut */

  // numberInputFormGroup: FormGroup;
  showMask = false;
  constructor(protected fb: FormBuilder) {
    super(fb);
  }

  ngOnInit() {
    super.ngOnInit();

    if(this.inputvalue && this.inputvalue.length) {
      this.showMask = true;
    }
  }

  onBlur(e:string) {
    /**do stuff on blur */
    this.showMask = true;
    super.onBlur(e);
  }
}
/** extend to -> 
 *  model formatting based on coma/dot decimal -> use a pipe convertor
 *    - max 2 decimal for model
 *  format on blur
 *  apply model limits
 */