import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCompComponent } from './ccomp.component';

describe('CCompComponent', () => {
  let component: CCompComponent;
  let fixture: ComponentFixture<CCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CCompComponent]
    });
    fixture = TestBed.createComponent(CCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
