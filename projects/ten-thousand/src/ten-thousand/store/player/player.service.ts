import {Injectable} from '@angular/core';
import {Player} from '../../interfaces/player';
import {PlayersStore} from './player.store';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    constructor(private store: PlayersStore) {}

    setPlayers(playerNames: string[]) {
        playerNames.map((name, index) => {
            const player = new Player(name);
            player.isPlaying = index === 0;
            this.store.add(player);
        });
    }
}
