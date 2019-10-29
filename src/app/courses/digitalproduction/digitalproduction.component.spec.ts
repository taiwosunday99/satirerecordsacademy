import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalproductionComponent } from './digitalproduction.component';

describe('DigitalproductionComponent', () => {
  let component: DigitalproductionComponent;
  let fixture: ComponentFixture<DigitalproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
