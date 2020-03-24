import {Injectable} from '@angular/core';
import {IPlayer} from '../interfaces/player';
import {StockageService} from '../services/stockage.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlayersService {
    public currentPlayer$: BehaviorSubject<IPlayer> = new BehaviorSubject<IPlayer>({
        name: '',
        score: 0,
        paliers: [],
    });
    public players: IPlayer[] = [];

    private currentIndex = 0;
    constructor(private _stockage: StockageService) {}

    register(playerNames: string[]) {
        const players: IPlayer[] = playerNames.map(name => {
            return {name, score: 0, paliers: []};
        });

        this.players = players;
        this._stockage.sauvegardeDeLaPartie(this.players);
        this.nextPlayer();
    }

    nextPlayer() {
        this.currentPlayer$.next(this.players[this.currentIndex++ % this.players.length]);
    }
}
