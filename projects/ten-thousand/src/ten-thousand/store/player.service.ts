import {Injectable} from '@angular/core';
import {TenThousandStore} from './ten-thousand.store';
import {IPlayer} from '../interfaces/player';

@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    constructor(private store: TenThousandStore) {}

    setPlayers(playerNames: string[]) {
        const players: IPlayer[] = playerNames.map(name => {
            return {name, score: 0, paliers: []};
        });

        this.store.update({players});
    }
}
