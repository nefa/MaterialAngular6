import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { MaterialsComponent } from './components/materials/materials.component';
import { MaterialModule } from './material.module';
import { ReactiveTestFormComponent } from './components/reactive-test-form/reactive-test-form.component';
import { InputOnlyNumberDirective } from './directives/input-only-number.directive';



@NgModule({
  declarations: [
    AppComponent,
    MaterialsComponent,
    ReactiveTestFormComponent,
    InputOnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
