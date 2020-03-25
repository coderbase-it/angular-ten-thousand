import {IPalier} from '../../interfaces/palier';

export interface IPalierState {
    paliers: IPalier[];
}

export const InitialPalierState: IPalierState = {
    paliers: [],
};
