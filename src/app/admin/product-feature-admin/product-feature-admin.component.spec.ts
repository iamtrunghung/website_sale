import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFeatureAdminComponent } from './product-feature-admin.component';

describe('ProductFeatureAdminComponent', () => {
  let component: ProductFeatureAdminComponent;
  let fixture: ComponentFixture<ProductFeatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFeatureAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFeatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
