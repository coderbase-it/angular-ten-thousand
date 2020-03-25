import {RouterReducerState} from '@ngrx/router-store';
import {InitialPalierState, IPalierState} from './palier.state';

export interface IAppState {
    router?: RouterReducerState;
    paliers: IPalierState;
}

export const initialAppState: IAppState = {
    paliers: InitialPalierState,
};

export function getInitialState(): IAppState {
    return initialAppState;
}
