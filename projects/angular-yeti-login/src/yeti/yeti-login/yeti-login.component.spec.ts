import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YetiLoginComponent } from './yeti-login.component';

describe('YetiLoginComponent', () => {
  let component: YetiLoginComponent;
  let fixture: ComponentFixture<YetiLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YetiLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YetiLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
