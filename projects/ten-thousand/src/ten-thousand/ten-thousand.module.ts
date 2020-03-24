import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { DiceComponent } from './components/dice/dice.component';
import { AddPlayerComponent } from './containers/add-player/add-player.component';
import { LaunchDicesComponent } from './containers/launch-dices/launch-dices.component';
import {TenThousandRoutingModule} from './ten-thousand-routing.module';
import { PaliersComponent } from './components/paliers/paliers.component';


@NgModule({
  declarations: [DiceComponent, LaunchDicesComponent, AddPlayerComponent, PaliersComponent],
  imports: [
    CommonModule, FontAwesomeModule, TenThousandRoutingModule, ReactiveFormsModule
  ],
    exports: [ LaunchDicesComponent],
})
export class TenThousandModule { }
