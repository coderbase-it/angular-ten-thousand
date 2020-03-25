import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPlayer} from '../../interfaces/player';
import {CalculService} from '../../services/calcul.service';
import {PalierService} from '../../services/palier.service';
import {PlayersService} from '../../services/players.service';
import {StockageService} from '../../services/stockage.service';

@Component({
    selector: 'launch-dices',
    templateUrl: './launch-dices.component.html',
    styleUrls: ['./launch-dices.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchDicesComponent {
    public dices$: BehaviorSubject<number[]>;
    public score$: BehaviorSubject<number>;
    public dicesScore: number[];
    public sock$: BehaviorSubject<boolean>;
    public players$: BehaviorSubject<IPlayer[]>;
    public currentPlayer$: BehaviorSubject<IPlayer>;

    constructor(
        private playerService: PlayersService,
        private calculService: CalculService,
        private palierService: PalierService,
        private stockageService: StockageService,
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
    check() {
        // console.log('réactualiser');
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
