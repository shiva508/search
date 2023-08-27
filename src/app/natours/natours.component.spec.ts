import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatoursComponent } from './natours.component';

describe('NatoursComponent', () => {
  let component: NatoursComponent;
  let fixture: ComponentFixture<NatoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NatoursComponent]
    });
    fixture = TestBed.createComponent(NatoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
