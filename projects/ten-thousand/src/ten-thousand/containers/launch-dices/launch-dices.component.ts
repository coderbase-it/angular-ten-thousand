import {Component} from '@angular/core';
import {IPlayer} from '../../interfaces/player';
import {BehaviorSubject} from 'rxjs';
import {CalculService} from '../../services/calcul.service';
import {PlayersService} from '../../services/players.service';
import {PalierService} from '../../services/palier.service';

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
    public players: IPlayer[];
    public currentPlayer$: BehaviorSubject<IPlayer>;
    constructor(
        private playerService: PlayersService,
        private calculService: CalculService,
        private palierService: PalierService,
    ) {
        this.players = this.playerService.players;
        this.dices$ = this.calculService.dices$;
        this.score$ = this.calculService.score$;
        this.dicesScore = this.calculService.dicesScore;
        this.sock$ = this.calculService.sock$;
        this.currentPlayer$ = this.playerService.currentPlayer$;
    }

    rollDices() {
        this.calculService.rollDices();
    }

    get scorePartie() {
        return this.score$;
    }

    validerPalier(score: number) {
        this.palierService.valider(score);
        this.currentPlayer$.value.score += score;
        this.playerService.nextPlayer();
    }
}
