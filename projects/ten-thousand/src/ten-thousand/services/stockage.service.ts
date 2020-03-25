import {Injectable} from '@angular/core';
import {IPlayer} from '../interfaces/player';

@Injectable({
    providedIn: 'root',
})
export class StockageService {
    constructor() {}

    sauvegardeDeLaPartie(player: IPlayer[]): void {
        localStorage.setItem('tenThousand', JSON.stringify(player));
    }
    /* miseAjourDeLaPartie(
        score: number,
        lastplayer: BehaviorSubject<IPlayer>,
        paliers: Palier[] = [],
    ) {
        // const partie: IPlayer[] = JSON.parse(localStorage.getItem('tenThousand') as string) || [];
        // const namePlayer = lastplayer.getValue().name;
        /* const newPartie: IPlayer = {
        name: namePlayer,
        score: score,
        paliers: paliers,
    }; */
    // partie.
    // this.sauvegardeDeLaPartie(partie.push(lastpartie));
    // console.log(lastpartie);
    // }
    supprimerLaPartie() {
        localStorage.removeItem('tenThousand');
    }
    getPartieSauvegarder(): IPlayer[] {
        const partie = localStorage.getItem('tenThousand');

        return partie ? JSON.parse(partie) : [];
    }
    partieSauvegarder(): boolean {
        const partie: IPlayer[] = JSON.parse(localStorage.getItem(
            'tenThousand',
        ) as string);

        return partie ? partie.length > 0 : false;
    }
}
