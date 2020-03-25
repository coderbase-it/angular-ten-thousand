import {Injectable} from '@angular/core';
import {Player} from '../../interfaces/player';
import {ID} from '@datorama/akita';
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

    nextPlayer() {
        this.store.update(state => {
            const newState = {...state};
            state.players.some((player, index) => {
                if (player.isPlaying) {
                    player.isPlaying = false;
                    if (index === state.players.length - 1) {
                        state.players[0].isPlaying = true;
                    } else {
                        state.players[index + 1].isPlaying = true;
                    }
                    return true;
                }
                return false;
            });
            return newState;
        });
    }

    updateScore(player: IPlayer, score: number) {
        this.store.update(player.id, (player: IPlayer) => {
            return {
                ...player,
                score: score + player.score,
            };
        });
    }
}
