import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PageExample1Component } from './page-example1/page-example1.component';
import { PageExample2Component } from './page-example2/page-example2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NgxBreadcrumbsModule } from 'ngx-breadcrumbs';
import { SimpleManualBasicExampleComponent } from './home/cases/simple-manual-basic-example/simple-manual-basic-example.component';
import { SimpleManualWithServiceConfigComponent } from './home/cases/simple-manual-with-service-config/simple-manual-with-service-config.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PageExample1Component,
        PageExample2Component,
        Child1Component,
        Child2Component,
        SimpleManualBasicExampleComponent,
        SimpleManualWithServiceConfigComponent
    ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        NgxBreadcrumbsModule.forRoot({
            globalSeparator: '//'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
