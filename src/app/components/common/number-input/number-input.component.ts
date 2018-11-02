import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

export class Config {
  id:string;
  maxLength? = 6;
  minLength? = 3;

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

  @Input() value = '';
  @Input() config: Config = {id: '123rand'};

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("changes", changes);
    
  }

}
