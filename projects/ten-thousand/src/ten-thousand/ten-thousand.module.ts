import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DiceComponent} from './components/dice/dice.component';
import {AddPlayerComponent} from './containers/add-player/add-player.component';
import {LaunchDicesComponent} from './containers/launch-dices/launch-dices.component';
import {TenThousandRoutingModule} from './ten-thousand-routing.module';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    // Location of assets files
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [DiceComponent, LaunchDicesComponent, AddPlayerComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        TenThousandRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
            defaultLanguage: 'en',
        }),
    ],
    providers: [HttpClient],
    exports: [LaunchDicesComponent],
})
export class TenThousandModule {}
