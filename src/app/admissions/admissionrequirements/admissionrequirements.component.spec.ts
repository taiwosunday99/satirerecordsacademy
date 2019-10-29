import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionrequirementsComponent } from './admissionrequirements.component';

describe('AdmissionrequirementsComponent', () => {
  let component: AdmissionrequirementsComponent;
  let fixture: ComponentFixture<AdmissionrequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionrequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionrequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
