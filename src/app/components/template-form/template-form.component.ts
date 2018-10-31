import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  simpleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.simpleForm = this.fb.group({
      boxes: ['']
    })
  }

}
