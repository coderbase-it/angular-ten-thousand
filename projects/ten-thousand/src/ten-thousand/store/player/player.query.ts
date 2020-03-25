import {QueryEntity} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {PlayersState, PlayersStore} from './player.store';
import {Player} from '../../interfaces/player';
import {combineLatest} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PlayerQuery extends QueryEntity<PlayersState> {
    players$ = this.selectAll();
    currentPlayer$ = combineLatest(this.players$, this.isCurrentPlayer);

    constructor(protected store: PlayersStore) {
        super(store);
    }

    private isCurrentPlayer(players: Player[]): Player {
        return players.filter(player => player.isPlaying)[0];
    }
}
