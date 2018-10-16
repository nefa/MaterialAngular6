import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTestFormComponent } from './material-test-form.component';

describe('MaterialTestFormComponent', () => {
  let component: MaterialTestFormComponent;
  let fixture: ComponentFixture<MaterialTestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialTestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
