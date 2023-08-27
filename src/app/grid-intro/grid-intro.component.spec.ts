import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIntroComponent } from './grid-intro.component';

describe('GridIntroComponent', () => {
  let component: GridIntroComponent;
  let fixture: ComponentFixture<GridIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridIntroComponent]
    });
    fixture = TestBed.createComponent(GridIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
