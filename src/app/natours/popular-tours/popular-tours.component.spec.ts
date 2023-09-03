import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularToursComponent } from './popular-tours.component';

describe('PopularToursComponent', () => {
  let component: PopularToursComponent;
  let fixture: ComponentFixture<PopularToursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularToursComponent]
    });
    fixture = TestBed.createComponent(PopularToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
