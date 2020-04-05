import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleManualBasicExampleComponent } from './simple-manual-basic-example.component';

describe('SimpleManualBasicExampleComponent', () => {
  let component: SimpleManualBasicExampleComponent;
  let fixture: ComponentFixture<SimpleManualBasicExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleManualBasicExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleManualBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
