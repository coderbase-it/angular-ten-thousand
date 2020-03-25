import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {palierReducers} from './palier.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    paliers: palierReducers,
};
