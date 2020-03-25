import {Action} from '@ngrx/store';
import {IPalier} from '../../interfaces/palier';

export enum EPalierActions {
    GetPaliers = '[Palier] Get Paliers',
    GetPaliersSuccess = '[Palier] Get Paliers Success',
}
export class GetPaliers implements Action {
    public readonly type = EPalierActions.GetPaliers;
}

export class GetPaliersSuccess implements Action {
    public readonly type = EPalierActions.GetPaliersSuccess;
    constructor(public payload: IPalier[]) {}
}

export type PalierActions = GetPaliers | GetPaliersSuccess;
