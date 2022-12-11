import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFriendsComponent } from './public-friends.component';

describe('PublicFriendsComponent', () => {
  let component: PublicFriendsComponent;
  let fixture: ComponentFixture<PublicFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
