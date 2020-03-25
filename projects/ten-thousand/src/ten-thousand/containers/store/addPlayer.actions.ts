import { IPlayer } from '../../interfaces/player';

export class AddPlayers {
    static readonly type = 'AddPlayers';
    constructor(public players: IPlayer[]) {
        console.log(players);
    }
}
