import {EPalierActions, PalierActions} from '../actions/palier.actions';
import {InitialPalierState, IPalierState} from '../state/palier.state';

export function palierReducers(
    state: IPalierState = InitialPalierState,
    action: PalierActions,
): IPalierState {
    switch (action.type) {
        case EPalierActions.GetPaliersSuccess: {
            return {
                ...state,
                paliers: action.payload,
            };
        }
        default:
            return state;
    }
}
