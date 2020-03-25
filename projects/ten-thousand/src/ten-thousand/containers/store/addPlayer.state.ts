import { Action, State  } from '@ngxs/store';
import { AddPlayers } from '../store/addPlayer.actions';

export interface IPlayerState {
    players: [];
}

@State<IPlayerState>({
    name: 'players',
    defaults: {
        players: [],
    }
})
export class PlayersState {
    constructor() {}

@Action(AddPlayers)
register({getState, setState}, action: AddPlayers) {
    const state = getState();
    console.log({...state, players: [...action.players, ...state.players]});
    setState({...state, players: action.players});
    //this._playerService.register(state);
}
}
