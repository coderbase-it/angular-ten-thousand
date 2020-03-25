import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {IPlayer} from '../../interfaces/player';
import {faSocks} from '@fortawesome/free-solid-svg-icons';
import {BehaviorSubject} from 'rxjs';
@Component({
    selector: 'paliers',
    templateUrl: './paliers.component.html',
    styleUrls: ['./paliers.component.css'],
})
export class PaliersComponent implements OnInit {
    public players: BehaviorSubject<IPlayer[]>;
    public faSocks = faSocks;
    constructor(private playersService: PlayersService) {
        this.players = this.playersService.players$;
    }

    ngOnInit(): void {}

    createArray(nombreSocks: any) {
        return new Array(nombreSocks);
    }
}
