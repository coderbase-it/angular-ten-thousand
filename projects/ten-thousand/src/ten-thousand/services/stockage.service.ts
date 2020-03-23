import {Injectable} from '@angular/core';
import {Player} from '../interfaces/player';
@Injectable({
    providedIn: 'root',
})
export class StockageService {
    sauvegardeJoueur() {
        // localStorage.setItem(player.name, player.score.toString());
    }
    sauvegardeDeLaPartie(player: Player[]): void {
        localStorage.setItem('tenThousand', JSON.stringify(player));
    }
    miseAjourScore() {}
    supprimerLaPartie() {
        localStorage.removeItem('tenThousand');
    }
    constructor() {}
}
