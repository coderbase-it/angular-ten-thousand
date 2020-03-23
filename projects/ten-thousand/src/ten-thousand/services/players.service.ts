import {Injectable} from '@angular/core';
import {Player} from '../interfaces/player';
import {StockageService} from '../services/stockage.service';

@Injectable({
    providedIn: 'root',
})
export class PlayersService {
    public players: Player[] = [];

    constructor(private _stockage: StockageService) {}

    register(playerNames: string[]) {
        const players: Player[] = playerNames.map(name => {
            return {name, score: 0};
        });
        this.players = players;
        this._stockage.sauvegardeDeLaPartie(this.players);
    }
}
