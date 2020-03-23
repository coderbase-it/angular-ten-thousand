import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {LOCALE_ID, NgModule, TRANSLATIONS_FORMAT} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {StaticModule} from './modules/static/static.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr-FR' is optional
registerLocaleData(localeFr, 'fr-FR');
@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({appId: 'demo'}),
        AppRoutingModule,
        StaticModule,
        FontAwesomeModule,
    ],
    declarations: [AppComponent],
    providers: [
        {provide: LOCALE_ID, useValue: 'en'},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy,
        },
    ],
})
export class AppBrowserModule {}
