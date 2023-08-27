import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFriendComponent } from './find-friend.component';

describe('FindFriendComponent', () => {
  let component: FindFriendComponent;
  let fixture: ComponentFixture<FindFriendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindFriendComponent]
    });
    fixture = TestBed.createComponent(FindFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
