import {Palier} from './palier';

export interface IPlayer {
    name: string;
    score: number;
    paliers: Palier[];
    isPlaying?: boolean;
}
