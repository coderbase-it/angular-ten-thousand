// import {Query} from '@datorama/akita';
// import {TenThousandState, TenThousandStore} from './ten-thousand.store';
// import {Injectable} from '@angular/core';

// @Injectable({
//     providedIn: 'root',
// })
// export class PlayerQuery extends Query<TenThousandState> {
//     players$ = this.select('players');
//     currentPlayer$ = this.select(
//         state => state.players.filter(player => player.isPlaying)[0],
//     );

//     constructor(protected store: TenThousandStore) {
//         super(store);
//     }
// }
