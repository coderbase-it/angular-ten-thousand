import {Palier} from './palier';
import {ID, guid} from '@datorama/akita';

export interface IPlayer {
    id?: ID;
    name: string;
    score: number;
    paliers: Palier[];
    isPlaying?: boolean;
}

export class Player {
    public readonly id = guid();
    public score: number = 0;
    public paliers: Palier[] = [];
    public isPlaying: boolean = false;

    constructor(public name: string) {}
}
