import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[maxCharsAllowedNg]'
})
export class InputMaxCharsDirective {

  constructor(private el: ElementRef) { }

  @Input()
  maxCharsAllowedNg: any;

  // @HostListener('keydown', ['$event'])
  // onkeydown(event: KeyboardEvent) {
  //   let e = <KeyboardEvent>event;
  //   console.log(e.keyCode);
  // }

  // @HostListener("focus", ["$event.target"])
  // onFocus(target) {
  //   console.log(target.value)
  // }

  // @HostListener("blur", ["$event.target"])
  // onBlur(target) {
  //   console.log(target.value)

  // }

  @HostListener('input', ['$event.target.value'])
  onInput(value) {
    const _max = this.maxCharsAllowedNg;
  }
 

}
