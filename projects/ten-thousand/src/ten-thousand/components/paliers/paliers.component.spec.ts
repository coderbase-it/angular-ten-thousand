import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaliersComponent } from './paliers.component';

describe('PaliersComponent', () => {
  let component: PaliersComponent;
  let fixture: ComponentFixture<PaliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
