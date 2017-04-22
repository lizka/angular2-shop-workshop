import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedProductListComponent } from './promoted-product-list.component';

describe('PromotedProductListComponent', () => {
  let component: PromotedProductListComponent;
  let fixture: ComponentFixture<PromotedProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotedProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotedProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
