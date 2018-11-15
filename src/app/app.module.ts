import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialModule } from './material.module';
import { ReactiveTestFormComponent } from './components/reactive-test-form/reactive-test-form.component';
import { InputOnlyNumberDirective } from './directives/input-only-number.directive';
import { MaterialTestFormComponent } from './components/material-test-form/material-test-form.component';
import { InputMaxCharsDirective } from './directives/input-max-chars.directive';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { NumberInputComponent } from './components/common/number-input/number-input.component';
import { FormComponentsModule } from './form-components/form-components.module';
import { AmountComponent, FloatNumnberPipe } from './components/common/amount/amount.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    ReactiveTestFormComponent,
    InputOnlyNumberDirective,
    MaterialTestFormComponent,
    InputMaxCharsDirective,
    TemplateFormComponent,
    NumberInputComponent,
    AmountComponent,
    FloatNumnberPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FormComponentsModule
  ],
  providers: [],
  exports: [FloatNumnberPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
