import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderbaseNgxBreadcrumbsComponent } from './coderbase-ngx-breadcrumbs.component';

describe('CoderbaseNgxBreadcrumbsComponent', () => {
  let component: CoderbaseNgxBreadcrumbsComponent;
  let fixture: ComponentFixture<CoderbaseNgxBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoderbaseNgxBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderbaseNgxBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
