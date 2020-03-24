import {Injectable} from '@angular/core';
import {Palier} from '../interfaces/palier';

import {PlayersService} from './players.service';

@Injectable({
    providedIn: 'root',
})
export class PalierService {
    constructor(private playersService: PlayersService) {}

    // permet de valider un palier en lui passant la valeur du palier
    valider(valeur: number) {
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
            const player = this.playersService.players.filter(
                p => p.name === this.playersService.currentPlayer$.value.name,
            );
            if (player.length > 0) {
                const p = player[0];
                p.paliers.push(new Palier(valeur));
            }
        }
    }

    applySock() {
        const player = this.playersService.players.filter(
            p => p.name === this.playersService.currentPlayer$.value.name,
        );
        if (player.length > 0) {
            const p = player[0];
            const lastPalier = p.paliers.pop();
            if (lastPalier) {
                lastPalier.deactivate();
                p.paliers.push(lastPalier);
            }
        }
    }
}
