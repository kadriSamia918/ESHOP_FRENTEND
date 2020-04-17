import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitdetailComponent } from './produitdetail.component';

describe('ProduitdetailComponent', () => {
  let component: ProduitdetailComponent;
  let fixture: ComponentFixture<ProduitdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
