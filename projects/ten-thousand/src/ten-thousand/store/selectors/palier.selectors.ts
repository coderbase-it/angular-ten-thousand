import {createSelector} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import {IPalierState} from '../state/palier.state';

const selectPaliers = (state: IAppState) => state.paliers;

export const selectPalierList = createSelector(
    selectPaliers,
    (state: IPalierState) => state.paliers,
);
