import {Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPlayer} from '../../interfaces/player';
import {CalculService} from '../../services/calcul.service';
import {PalierService} from '../../services/palier.service';
import {PlayersService} from '../../services/players.service';
import {StockageService} from '../../services/stockage.service';
import {PlayerQuery} from '../../store/player/player.query';
import {PlayerService} from '../../store/player/player.service';

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
    // public players$: Observable<IPlayer[]>;
    public currentPlayer$: BehaviorSubject<IPlayer>;
    // public currentPlayer$: Observable<IPlayer>;
    public storePlayers$: any;
    public storeCurrentPlayer$: any;

    constructor(
        private playerService: PlayersService,
        private calculService: CalculService,
        private palierService: PalierService,
        private stockageService: StockageService,
        private storePlayerQuery: PlayerQuery,
        private storePlayerService: PlayerService,
    ) {
        this.players$ = this.playerService.players$;
        // this.players$ = this.storePlayerQuery.players$;
        this.dices$ = this.calculService.dices$;
        this.score$ = this.calculService.score$;
        this.dicesScore = this.calculService.dicesScore;
        this.sock$ = this.calculService.sock$;
        this.currentPlayer$ = this.playerService.currentPlayer$;
        // this.currentPlayer$ = this.storePlayerQuery.currentPlayer$;

        // this.storePlayers$ = this.storePlayerQuery.players$;
        // this.storeCurrentPlayer$ = this.storePlayerQuery.currentPlayer$;
        this.storePlayers$ = this.storePlayerQuery.players$;
        this.storeCurrentPlayer$ = this.storePlayerQuery.currentPlayer$;
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
        // this.storePlayerService.updateScore(this.store);
        // this.currentPlayer$.value.score += score;
        this.playerService.nextPlayer();
        this.stockageService.sauvegardeDeLaPartie(this.players$.value);
        // this.storePlayerService.nextPlayer();
    }
}
