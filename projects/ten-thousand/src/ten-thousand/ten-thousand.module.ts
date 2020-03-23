import {CommonModule, registerLocaleData} from '@angular/common';
import localeFrExtra from '@angular/common/locales/extra/fr';
import localeFr from '@angular/common/locales/fr';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {DiceComponent} from './components/dice/dice.component';
import {AddPlayerComponent} from './containers/add-player/add-player.component';
import {LaunchDicesComponent} from './containers/launch-dices/launch-dices.component';
import {TenThousandRoutingModule} from './ten-thousand-routing.module';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
    declarations: [DiceComponent, LaunchDicesComponent, AddPlayerComponent],
    imports: [
        CommonModule,
        FontAwesomeModule,
        TenThousandRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [LaunchDicesComponent],
})
export class TenThousandModule {}
