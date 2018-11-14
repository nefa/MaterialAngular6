import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberInputComponent } from './number-input/number-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    NumberInputComponent,
  ],
  declarations: [NumberInputComponent]
})
export class FormComponentsModule { }
