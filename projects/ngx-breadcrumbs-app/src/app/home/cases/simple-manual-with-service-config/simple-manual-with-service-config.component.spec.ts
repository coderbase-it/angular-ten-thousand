import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleManualWithServiceConfigComponent } from './simple-manual-with-service-config.component';

describe('SimpleManualWithServiceConfigComponent', () => {
  let component: SimpleManualWithServiceConfigComponent;
  let fixture: ComponentFixture<SimpleManualWithServiceConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleManualWithServiceConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleManualWithServiceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
