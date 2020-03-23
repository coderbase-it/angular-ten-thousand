import {Injectable} from '@angular/core';
import {IPlayer} from '../interfaces/player';
import {StockageService} from '../services/stockage.service';

@Injectable({
    providedIn: 'root',
})
export class PlayersService {
    public players: IPlayer[] = [];

    constructor(private _stockage: StockageService) {}

    register(playersObject: {players: string[]}) {
        const players: IPlayer[] = playersObject.players.map(name => {
            return {name, score: 0, paliers: []};
        });

        this.players = players;
        this._stockage.sauvegardeDeLaPartie(this.players);
    }
}
