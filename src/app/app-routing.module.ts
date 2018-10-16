import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveTestFormComponent } from './components/reactive-test-form/reactive-test-form.component';

const routes: Routes = [
  {
    path: 'reactiveTestForm',
    component: ReactiveTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
