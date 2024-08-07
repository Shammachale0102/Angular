import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateRouteCompComponent } from './activate-route-comp.component';

describe('ActivateRouteCompComponent', () => {
  let component: ActivateRouteCompComponent;
  let fixture: ComponentFixture<ActivateRouteCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateRouteCompComponent]
    });
    fixture = TestBed.createComponent(ActivateRouteCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
