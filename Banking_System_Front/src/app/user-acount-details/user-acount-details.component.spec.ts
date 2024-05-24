import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcountDetailsComponent } from './user-acount-details.component';

describe('UserAcountDetailsComponent', () => {
  let component: UserAcountDetailsComponent;
  let fixture: ComponentFixture<UserAcountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAcountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAcountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
