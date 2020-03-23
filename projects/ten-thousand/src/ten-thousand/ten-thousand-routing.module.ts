import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddPlayerComponent} from './containers/add-player/add-player.component';
import {LaunchDicesComponent} from './containers/launch-dices/launch-dices.component';
import {PreviousGameGuard} from './guards/previous-game.guard';

const routes: Routes = [
    {path: '', redirectTo: 'add', pathMatch: 'full', canActivate: [PreviousGameGuard]},
    {path: 'add', component: AddPlayerComponent},
    {path: 'game', component: LaunchDicesComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TenThousandRoutingModule {}
