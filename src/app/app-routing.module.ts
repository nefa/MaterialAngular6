import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveTestFormComponent } from './components/reactive-test-form/reactive-test-form.component';
import { MaterialTestFormComponent } from './components/material-test-form/material-test-form.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';


const routes: Routes = [
  {
    path: 'reactiveTestForm',
    component: ReactiveTestFormComponent,
  },
  {
    path: 'materialTestForm',
    component: MaterialTestFormComponent,
  },
  {
    path: 'templateForm',
    component: TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
