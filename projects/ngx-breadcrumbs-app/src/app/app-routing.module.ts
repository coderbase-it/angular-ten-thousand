import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PageExample1Component} from "./page-example1/page-example1.component";
import {PageExample2Component} from "./page-example2/page-example2.component";
import {Child1Component} from "./child1/child1.component";
import {Child2Component} from "./child2/child2.component";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            breadcrumb: 'Home',
            isHome: true,
            icon: 'fa fa-home',
            show: false
        },
        pathMatch: 'full'
    },
    {
        path:'lazy', loadChildren: () => import('./lazy-with-config/lazy-with-config.module').then((m) => m.LazyWithConfigModule)
    },
    {
        path: 'page-example-1',
        component: PageExample1Component,
        data: { breadcrumb: 'Page Example 1' }
    },
    {
        path: 'page-example-2',
        data: { breadcrumb: 'Page Example 2' },
        children: [
            {
                path: '',
                component: PageExample2Component,
            },
            {
                path: 'child-1',
                component: Child1Component,
                data: {
                    breadcrumb: 'Child 1',
                    show: true
                }
            },
            {
                path: 'child-2',
                component: Child2Component,
                data: { breadcrumb: 'Child 2' }
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
