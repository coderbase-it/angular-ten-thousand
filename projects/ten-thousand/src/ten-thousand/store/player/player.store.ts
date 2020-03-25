import {EntityStore, StoreConfig, EntityState} from '@datorama/akita';
import {IPlayer} from '../../interfaces/player';
import {Player} from '../../interfaces/player';
import {Injectable} from '@angular/core';

export interface PlayersState extends EntityState<Player> {}

const initialState = {};

@Injectable({
    providedIn: 'root',
})
@StoreConfig({name: 'Players'})
export class PlayersStore extends EntityStore<PlayersState> {
    constructor() {
        super(initialState);
    }
}
