import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCompComponent } from './bcomp.component';

describe('BCompComponent', () => {
  let component: BCompComponent;
  let fixture: ComponentFixture<BCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BCompComponent]
    });
    fixture = TestBed.createComponent(BCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
