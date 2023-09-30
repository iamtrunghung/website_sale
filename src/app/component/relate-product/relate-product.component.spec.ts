import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateProductComponent } from './relate-product.component';

describe('RelateProductComponent', () => {
  let component: RelateProductComponent;
  let fixture: ComponentFixture<RelateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
