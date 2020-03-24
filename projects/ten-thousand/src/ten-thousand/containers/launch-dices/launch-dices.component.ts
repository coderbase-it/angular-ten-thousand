import {Component, OnInit} from '@angular/core';
import {IPlayer} from '../../interfaces/player';
import {BehaviorSubject} from 'rxjs';
import {CalculService} from '../../services/calcul.service';
import {PlayersService} from '../../services/players.service';

@Component({
    selector: 'launch-dices',
    templateUrl: './launch-dices.component.html',
    styleUrls: ['./launch-dices.component.css'],
})
export class LaunchDicesComponent implements OnInit {
    public dices$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    public score$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    public dicesScore: number[] = [];
    public sock$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public players: IPlayer[] = [];
    constructor(
        private playerService: PlayersService,
        private calculService: CalculService,
    ) {}

    ngOnInit(): void {
        this.players = this.playerService.players;
        this.dices$ = this.calculService.dices$;
        this.score$ = this.calculService.score$;
        this.dicesScore = this.calculService.dicesScore;
        this.sock$ = this.calculService.sock$;
    }
    rollDices() {
        this.calculService.rollDices();
    }

    get scorePartie() {
        return this.score$;
    }
}
