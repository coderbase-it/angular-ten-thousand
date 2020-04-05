import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Route } from '@angular/router';
import { filter} from 'rxjs/internal/operators';
import { NgxBreadcrumb } from './ngx-breadcrumb';
import { NgxBreadcrumbsService } from './services/ngx-breadcrumbs.service';

@Component({
  selector: 'ngx-breadcrumbs',
  template: `
    <nav aria-label="breadcrumb"
         *ngIf="show">
      <ol class="breadcrumb">
        <li *ngFor="let breadcrumb of breadcrumbs"
            class="breadcrumb-item"
            [ngClass]="{'active': !breadcrumb.url}">
          <a [routerLink]="[breadcrumb.url]"
             *ngIf="breadcrumb.url">
            <i class="{{ breadcrumb.icon }}" *ngIf="breadcrumb.icon"></i>
            {{ breadcrumb.label }}
          </a>
          <span *ngIf="!breadcrumb.url">
            <i class="{{ breadcrumb.icon }}" *ngIf="breadcrumb.icon"></i>
            {{ breadcrumb.label }}
          </span>
        </li>
      </ol>
    </nav>
  `,
  styles: []
})
export class NgxBreadcrumbsComponent implements OnInit {
  customCrumbs = [];
  breadcrumbs: NgxBreadcrumb[] = [];
  show = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: NgxBreadcrumbsService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
          console.log(this.activatedRoute)
        this.breadcrumbs = this.handleRoute(this.activatedRoute.root);
      });
    this.service.dynamicCrumbs.subscribe(crumb => {
      // @ts-ignore
        this.customCrumbs[crumb.component] = crumb;
      this.breadcrumbs = this.handleRoute(this.activatedRoute.root);
    });
  }

  handleRoute(route: ActivatedRoute,
              breadcrumbs: Array<NgxBreadcrumb> = []):
  Array<NgxBreadcrumb> {
    if (breadcrumbs.length === 0) {
      breadcrumbs.push(this.getCrumbFromRoute(this.getHomeRoute()));
    }


      if (route.routeConfig !== null &&
        'data' in route.routeConfig &&
         // @ts-ignore
        'breadcrumb' in route.routeConfig.data &&
        !route.routeConfig.data.isHome
    ) {
      const urlPrefix = breadcrumbs[breadcrumbs.length - 1] ? breadcrumbs[breadcrumbs.length - 1].url : '';
      // @ts-ignore
          const customCrumb = route.routeConfig.component && this.customCrumbs[route.routeConfig.component.name];
      // @ts-ignore
          const defaultCrumb = this.getCrumbFromRoute(route.routeConfig, urlPrefix);
      const crumb = customCrumb ? Object.assign(defaultCrumb, customCrumb) : defaultCrumb;
      breadcrumbs = [ ...breadcrumbs, crumb ];
    }

    if (route.firstChild) {
      return this.handleRoute(route.firstChild, breadcrumbs);
    }

    delete(breadcrumbs[breadcrumbs.length - 1].url);
    // @ts-ignore
      this.show = breadcrumbs[breadcrumbs.length - 1].show;
    return breadcrumbs;
  }

  getHomeRoute() {
    return this.router.config.filter(crumb => crumb.data && crumb.data.isHome)[0];
  }

  getCrumbFromRoute(route: Route, urlPrefix = null): NgxBreadcrumb {


      return {
      label: route.data && route.data.breadcrumb,
      url: urlPrefix ? `${urlPrefix}/${route.path}` : route.path || '/',
      component: route.component && route.component.name,
          // @ts-ignore
      icon: route.data.icon,
          // @ts-ignore
      show: route.data.hasOwnProperty('show') ? route.data.show : true
    };
  }
}
