import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamodalComponent } from './adamodal.component';

describe('AdamodalComponent', () => {
  let component: AdamodalComponent;
  let fixture: ComponentFixture<AdamodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdamodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdamodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
