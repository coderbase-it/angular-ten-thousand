import { NgModule } from '@angular/core';
import { NgxBreadcrumbsComponent } from './ngx-breadcrumbs.component';
import { NgxBreadcrumbsService } from './ngx-breadcrumbs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoderbaseNgxBreadcrumbsComponent } from './coderbase-ngx-breadcrumbs/coderbase-ngx-breadcrumbs.component';
import { CoderbaseNgxBreadcrumbItemComponent } from './coderbase-ngx-breadcrumb-item/coderbase-ngx-breadcrumb-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbItemComponent],
    exports: [NgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbItemComponent],
  providers: [NgxBreadcrumbsService]
})
export class NgxBreadcrumbsModule { }
