import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTestFormComponent } from './reactive-test-form.component';

describe('ReactiveTestFormComponent', () => {
  let component: ReactiveTestFormComponent;
  let fixture: ComponentFixture<ReactiveTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
