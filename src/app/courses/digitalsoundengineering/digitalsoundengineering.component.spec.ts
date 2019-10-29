import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalsoundengineeringComponent } from './digitalsoundengineering.component';

describe('DigitalsoundengineeringComponent', () => {
  let component: DigitalsoundengineeringComponent;
  let fixture: ComponentFixture<DigitalsoundengineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalsoundengineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalsoundengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
