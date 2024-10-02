import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLightComponent } from './categories-light.component';

describe('CategoriesLightComponent', () => {
  let component: CategoriesLightComponent;
  let fixture: ComponentFixture<CategoriesLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
