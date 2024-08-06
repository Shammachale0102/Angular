import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACompComponent } from './acomp.component';

describe('ACompComponent', () => {
  let component: ACompComponent;
  let fixture: ComponentFixture<ACompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACompComponent]
    });
    fixture = TestBed.createComponent(ACompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
