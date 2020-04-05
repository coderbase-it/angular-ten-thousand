import {Component, Input, OnInit} from '@angular/core';
import {NgxBreadcrumbsService} from "ngx-breadcrumbs";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'coderbase-ngx-breadcrumb-item',
  templateUrl: './coderbase-ngx-breadcrumb-item.component.html',
  styleUrls: ['./coderbase-ngx-breadcrumb-item.component.css']
})
export class CoderbaseNgxBreadcrumbItemComponent implements OnInit {
    @Input() label = '';
    @Input() route: string[] = [];
    @Input() routeParams: any = null;
    @Input() fragment = '';
    @Input() href = '';
    @Input() active: any;
    @Input() activeClass = 'active';
    public globalSeparator$: BehaviorSubject<any>;



  constructor(private ngxBreadcrumbsService : NgxBreadcrumbsService) {
      this.globalSeparator$ = this.ngxBreadcrumbsService.globalSeparator$;
  }

  ngOnInit(): void {
  }

}
