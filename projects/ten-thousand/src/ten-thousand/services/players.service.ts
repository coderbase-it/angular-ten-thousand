import {Injectable} from '@angular/core';
import {Player} from '../interfaces/player';
import {StockageService} from '../services/stockage.service';

@Injectable({
    providedIn: 'root',
})
export class PlayersService {
    public players: Player[] = [];

    constructor(private _stockage: StockageService) {}

    register(player: Player) {
        this.players.push({score: 0, ...player});
        this._stockage.sauvegardeDeLaPartie(this.players);
    }
}
