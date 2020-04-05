import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxBreadcrumbsModule} from "../../../../ngx-breadcrumbs/src/lib/ngx-breadcrumbs.module";
import { LazyComponent } from './lazy/lazy.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([
          {path: '', component:LazyComponent}
          ]),
      NgxBreadcrumbsModule.forChild({
          globalSeparator:5
      })
  ]
})
export class LazyWithConfigModule { }
