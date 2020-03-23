import {Injectable} from '@angular/core';
import {Palier} from '../interfaces/palier';
import {IPlayer} from '../interfaces/player';

import {PlayersService} from './players.service';

@Injectable({
    providedIn: 'root',
})
export class PalierService {
    constructor(private playersService: PlayersService) {}

    // permet de valider un palier en lui passant la valeur du palier
    valider(valeur: number, player: IPlayer) {
        // avant la validation il faut vérifier si on écrase pas un palier d'un concurrents
        if (valeur) {
            this.playersService.players.forEach(player => {
                player.paliers.forEach(p => {
                    // un palier existe déja chez un joueur
                    if (p.valeur === valeur) {
                        p.deactivate();
                    }
                });
            });
            // on valide le palier
            player.paliers.push(new Palier(valeur));
        }
    }
}
