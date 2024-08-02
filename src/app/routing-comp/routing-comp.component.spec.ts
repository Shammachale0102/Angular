import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingCompComponent } from './routing-comp.component';

describe('RoutingCompComponent', () => {
  let component: RoutingCompComponent;
  let fixture: ComponentFixture<RoutingCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutingCompComponent]
    });
    fixture = TestBed.createComponent(RoutingCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
