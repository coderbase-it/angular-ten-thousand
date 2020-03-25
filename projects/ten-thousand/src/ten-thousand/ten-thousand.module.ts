import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NgxsModule } from '@ngxs/store';
import {DiceComponent} from './components/dice/dice.component';
import {PaliersComponent} from './components/paliers/paliers.component';
import {AddPlayerComponent} from './containers/add-player/add-player.component';
import {LaunchDicesComponent} from './containers/launch-dices/launch-dices.component';
import { PlayersState } from './containers/store/addPlayer.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {TenThousandRoutingModule} from './ten-thousand-routing.module';

@NgModule({
    declarations: [
        DiceComponent,
        LaunchDicesComponent,
        AddPlayerComponent,
        PaliersComponent,
    ],
    imports: [
        NgxsModule.forRoot([PlayersState]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        CommonModule,
        FontAwesomeModule,
        TenThousandRoutingModule,
        ReactiveFormsModule,
    ],
    exports: [LaunchDicesComponent],
})
export class TenThousandModule {}
