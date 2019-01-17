import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailprodukComponent } from './detailproduk.component';

describe('DetailprodukComponent', () => {
  let component: DetailprodukComponent;
  let fixture: ComponentFixture<DetailprodukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailprodukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprodukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
