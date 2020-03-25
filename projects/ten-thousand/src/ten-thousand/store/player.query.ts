import {Query} from '@datorama/akita';
import {TenThousandState, TenThousandStore} from './ten-thousand.store';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PlayerQuery extends Query<TenThousandState> {
    players$ = this.select('players');

    constructor(protected store: TenThousandStore) {
        super(store);
    }
}
