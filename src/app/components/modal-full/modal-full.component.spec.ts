import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFullComponent } from './modal-full.component';

describe('ModalFullComponent', () => {
  let component: ModalFullComponent;
  let fixture: ComponentFixture<ModalFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
