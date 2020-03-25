// import {Injectable} from '@angular/core';
// import {TenThousandStore} from './ten-thousand.store';
// import {IPlayer} from '../interfaces/player';
// import { ID } from '@datorama/akita';

// @Injectable({
//     providedIn: 'root',
// })
// export class PlayerService {
//     constructor(private store: TenThousandStore) {}

//     setPlayers(playerNames: string[]) {
//         const players: IPlayer[] = playerNames.map((name, id) => {
//             return {id, name, score: 0, paliers: [], isPlaying: false};
//         });
//         players[0].isPlaying = true;

//         this.store.update({players});
//     }

//     nextPlayer() {
//         this.store.update(state => {
//             const newState = {...state};
//             state.players.some((player, index) => {
//                 if (player.isPlaying) {
//                     player.isPlaying = false;
//                     if (index === state.players.length - 1) {
//                         state.players[0].isPlaying = true;
//                     } else {
//                         state.players[index + 1].isPlaying = true;
//                     }
//                     return true;
//                 }
//                 return false;
//             });
//             return newState;
//         });
//     }

//     updateScore(player: IPlayer, score: number) {
//         this.store.update(player.id, (player: IPlayer) => {
//             return {
//                 ...player,
//                 score: score + player.score
//             }
//         });
//     }
// }
