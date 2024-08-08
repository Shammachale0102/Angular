import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCompComponent } from './news-comp.component';

describe('NewsCompComponent', () => {
  let component: NewsCompComponent;
  let fixture: ComponentFixture<NewsCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCompComponent]
    });
    fixture = TestBed.createComponent(NewsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
