import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssIntroComponent } from './scss-intro.component';

describe('ScssIntroComponent', () => {
  let component: ScssIntroComponent;
  let fixture: ComponentFixture<ScssIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScssIntroComponent]
    });
    fixture = TestBed.createComponent(ScssIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
