import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPlayer} from '../../interfaces/player';
import {CalculService} from '../../services/calcul.service';
import {PalierService} from '../../services/palier.service';
import {PlayersService} from '../../services/players.service';
import {StockageService} from '../../services/stockage.service';
import {Store, select} from '@ngrx/store';

import {selectPalierList} from '../../store/selectors/palier.selectors';
import {IAppState} from '../../store/state/app.state';

@Component({
    selector: 'launch-dices',
    templateUrl: './launch-dices.component.html',
    styleUrls: ['./launch-dices.component.css'],
})
export class LaunchDicesComponent {
    public dices$: BehaviorSubject<number[]>;
    public score$: BehaviorSubject<number>;
    public dicesScore: number[];
    public sock$: BehaviorSubject<boolean>;
    public players$: BehaviorSubject<IPlayer[]>;
    public currentPlayer$: BehaviorSubject<IPlayer>;
    paliers$ = this.store.pipe(select(selectPalierList));

    constructor(
        private playerService: PlayersService,
        private calculService: CalculService,
        private palierService: PalierService,
        private stockageService: StockageService,
        private store: Store<IAppState>,
    ) {
        this.players$ = this.playerService.players$;
        this.dices$ = this.calculService.dices$;
        this.score$ = this.calculService.score$;
        this.dicesScore = this.calculService.dicesScore;
        this.sock$ = this.calculService.sock$;
        this.currentPlayer$ = this.playerService.currentPlayer$;
    }

    rollDices() {
        this.calculService.rollDices();
        // this._stockage.miseAjourDeLaPartie(this.score$, this.currentPlayer$);
    }

    get scorePartie() {
        return this.score$;
    }

    validerPalier(score: number) {
        this.palierService.valider(score);
        this.currentPlayer$.value.score += score;
        this.playerService.nextPlayer();
        this.stockageService.sauvegardeDeLaPartie(this.players$.value);
    }
}
