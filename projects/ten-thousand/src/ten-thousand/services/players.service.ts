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
    public players$: BehaviorSubject<IPlayer[]> = new BehaviorSubject<IPlayer[]>([]);

    private currentIndex = 0;
    constructor(private _stockage: StockageService) {
        if (this.players$.value.length === 0) {
            //this.loadLastGame();
        }
    }

    register(playerNames: string[]) {
        const players: IPlayer[] = playerNames.map(name => {
            return {name, score: 0, paliers: []};
        });

        this.currentIndex = 0;
        this.players$.next(players);
        this.nextPlayer();
        this._stockage.sauvegardeDeLaPartie(this.players$.value);
    }

    nextPlayer() {
        const players = this.players$.value;
        this.currentPlayer$.next(players[this.currentIndex++ % players.length]);
    }

    loadLastGame() {
        const data = this._stockage.getPartieSauvegarder();

        if (data.length > 0) {
            this.currentIndex = 0;
            this.players$.next(data);
            this.nextPlayer();
        }
    }
}
