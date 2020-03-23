import {Injectable} from '@angular/core';
import {IPlayer} from '../interfaces/player';
@Injectable({
    providedIn: 'root',
})
export class StockageService {
    sauvegardeJoueur() {
        // localStorage.setItem(player.name, player.score.toString());
    }
    sauvegardeDeLaPartie(player: IPlayer[]): void {
        localStorage.setItem('tenThousand', JSON.stringify(player));
    }
    miseAjourScore() {}
    supprimerLaPartie() {
        localStorage.removeItem('tenThousand');
    }
    constructor() {}
}
