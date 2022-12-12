import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPublicsComponent } from './other-publics.component';

describe('OtherPublicsComponent', () => {
  let component: OtherPublicsComponent;
  let fixture: ComponentFixture<OtherPublicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherPublicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherPublicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
