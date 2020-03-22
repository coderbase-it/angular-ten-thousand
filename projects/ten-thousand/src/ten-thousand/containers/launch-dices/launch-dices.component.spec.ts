import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDicesComponent } from './launch-dices.component';

describe('LaunchDicesComponent', () => {
  let component: LaunchDicesComponent;
  let fixture: ComponentFixture<LaunchDicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchDicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
