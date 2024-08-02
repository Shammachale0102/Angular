import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecompComponent } from './pipecomp.component';

describe('PipecompComponent', () => {
  let component: PipecompComponent;
  let fixture: ComponentFixture<PipecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipecompComponent]
    });
    fixture = TestBed.createComponent(PipecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
