import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatourHeaderComponent } from './natour-header.component';

describe('NatourHeaderComponent', () => {
  let component: NatourHeaderComponent;
  let fixture: ComponentFixture<NatourHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NatourHeaderComponent]
    });
    fixture = TestBed.createComponent(NatourHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
