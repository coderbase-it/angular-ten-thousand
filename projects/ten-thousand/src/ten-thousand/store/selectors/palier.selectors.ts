import {createSelector} from '@ngrx/store';
import {IPalierState} from '../state/palier.state';
import {IAppState} from '../state/app.state';

const selectPaliers = (state: IAppState) => state.paliers;

export const selectPalierList = createSelector(
    selectPaliers,
    (state: IPalierState) => state.paliers,
);
