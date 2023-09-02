import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatuesComponent } from './featues.component';

describe('FeatuesComponent', () => {
  let component: FeatuesComponent;
  let fixture: ComponentFixture<FeatuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatuesComponent]
    });
    fixture = TestBed.createComponent(FeatuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
