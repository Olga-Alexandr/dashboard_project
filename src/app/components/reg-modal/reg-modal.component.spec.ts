import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegModalComponent } from './reg-modal.component';

describe('RegModalComponent', () => {
  let component: RegModalComponent;
  let fixture: ComponentFixture<RegModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
