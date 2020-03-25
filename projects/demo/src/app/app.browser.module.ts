import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {StaticModule} from './modules/static/static.module';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
// import { environment } from '../environments/environment';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'demo-superman'}),
        AppRoutingModule,
        StaticModule,
        FontAwesomeModule,
        AkitaNgDevtools.forRoot(),
        // environment.production ? [] : AkitaNgDevtools.forRoot(),
    ],
    declarations: [AppComponent],
    providers: [
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class AppBrowserModule {}
