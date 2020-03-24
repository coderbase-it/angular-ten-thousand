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
    // miseAjourDeLaPartie(score: BehaviorSubject<number>, player: BehaviorSubject<IPlayer>) {
    // const partie: IPlayer[] = JSON.parse(localStorage.getItem('tenThousand') as string);
    // const lastscore = score.getValue();
    // const lastplayer = player.getValue();
    // const lastpartie = partie.find(player => player.name === lastplayer.name);

    // lastpartie?.score = lastscore;

    //}
    supprimerLaPartie() {
        localStorage.removeItem('tenThousand');
    }
    getPartieSauvegarder(): IPlayer[] {
        return JSON.parse(localStorage.getItem('tenThousand') as string);
    }
    partieSauvegarder(): boolean {
        const partie: IPlayer[] = JSON.parse(localStorage.getItem(
            'tenThousand',
        ) as string);

        return partie.length > 0;
    }
}
