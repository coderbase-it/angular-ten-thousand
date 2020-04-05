import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderbaseNgxBreadcrumbItemComponent } from './coderbase-ngx-breadcrumb-item.component';

describe('CoderbaseNgxBreadcrumbItemComponent', () => {
  let component: CoderbaseNgxBreadcrumbItemComponent;
  let fixture: ComponentFixture<CoderbaseNgxBreadcrumbItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoderbaseNgxBreadcrumbItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderbaseNgxBreadcrumbItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
