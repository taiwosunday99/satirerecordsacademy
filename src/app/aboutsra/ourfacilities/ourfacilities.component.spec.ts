import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurfacilitiesComponent } from './ourfacilities.component';

describe('OurfacilitiesComponent', () => {
  let component: OurfacilitiesComponent;
  let fixture: ComponentFixture<OurfacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurfacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
