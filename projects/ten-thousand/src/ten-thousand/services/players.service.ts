import { Injectable } from '@angular/core';
import {Player} from '../interfaces/player';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
    public players: Player[] = [];

  constructor() { }

    register(player: Player){
        this.players.push(player)

    }
}
