import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {DiceComponent} from './components/dice/dice.component';
import {PaliersComponent} from './components/paliers/paliers.component';
import {AddPlayerComponent} from './containers/add-player/add-player.component';
import {LaunchDicesComponent} from './containers/launch-dices/launch-dices.component';
import {appReducers} from './store/reducers/app.reducers';
import {TenThousandRoutingModule} from './ten-thousand-routing.module';

@NgModule({
    declarations: [
        DiceComponent,
        LaunchDicesComponent,
        AddPlayerComponent,
        PaliersComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        TenThousandRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot(appReducers),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    ],
    exports: [LaunchDicesComponent],
})
export class TenThousandModule {}
