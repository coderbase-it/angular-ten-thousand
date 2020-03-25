import {EntityStore, StoreConfig} from '@datorama/akita';
import {IPlayer} from '../interfaces/player';
import {Injectable} from '@angular/core';

export interface TenThousandState {
    players: IPlayer[];
}

const initialState = {
    players: [],
};

@Injectable({
    providedIn: 'root',
})
@StoreConfig({name: 'TenThousand'})
export class TenThousandStore extends EntityStore<TenThousandState> {
    constructor() {
        super(initialState);
    }
}
