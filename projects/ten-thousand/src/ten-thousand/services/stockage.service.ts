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
    miseAjourDeLaPartie() {
        // const partie = localStorage.getItem('tenThousand');
    }
    recupererLaPartie(): string | null {
        const partie = localStorage.getItem('tenThousand');

        return partie;
    }
    supprimerLaPartie() {
        localStorage.removeItem('tenThousand');
    }
    // here
    /* partieSauvegarder(): boolean {
        return localStorage.getItem('tenThousand')
            ? localStorage.getItem('tenThousand').length > 0
            : false;
    } */
    constructor() {}
}
