import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPlayer} from '../interfaces/player';
import {StockageService} from '../services/stockage.service';

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
    constructor(private _stockage: StockageService) {
        if (this._stockage.partieSauvegarder()) {
            this.players = this._stockage.getPartieSauvegarder();
            this.currentPlayer$.next(this.players[this.players.length - 1]);
        }
    }

    register(playerNames: string[]) {
        const players: IPlayer[] = playerNames.map(name => {
            return {name, score: 0, paliers: []};
        });

        this.players = players;
        this.nextPlayer();
        // this._stockage.sauvegardeDeLaPartie(this.players);
    }

    nextPlayer() {
        this.currentPlayer$.next(this.players[this.currentIndex++ % this.players.length]);
    }
}
