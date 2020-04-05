import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import { NgxBreadcrumb } from '../ngx-breadcrumb';
import {OptionsService} from "./options.service";

@Injectable({providedIn: 'root'})
export class NgxBreadcrumbsService {
  dynamicCrumbs: Subject<NgxBreadcrumb> = new Subject<NgxBreadcrumb>();
  globalSeparator$: BehaviorSubject<any> = new BehaviorSubject(null);
    private options: any;

  constructor(private optionsService: OptionsService) {
      this.options = this.optionsService;

      console.group( "MyService Constructor" );
      console.log( "Injected Options" );
      this.globalSeparator$.next(this.options.globalSeparator)
      console.log( this.options );
      console.groupEnd();
  }

  // @ts-ignore
    customCrumbTitle(title: string, component?) {
    const crumb: NgxBreadcrumb = {label: title, component: component};
    this.dynamicCrumbs.next(crumb);
  }
}
