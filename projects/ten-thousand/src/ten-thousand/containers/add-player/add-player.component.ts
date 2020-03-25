import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';
import {PlayerService} from '../../store/player/player.service';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlayerComponent implements OnInit {
    public myform: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private playerService: PlayersService,
        private storePlayerService: PlayerService,
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.myform = this.fb.group({
            players: this.fb.array([]),
        });
        this.addPlayer();
    }

    get playersArray() {
        return this.myform.get('players') as FormArray;
    }

    register() {
        // tslint:disable-next-line:no-console
        if (this.myform.valid) {
            this.playerService.register(this.myform.value.players);
            this.storePlayerService.setPlayers(this.myform.value.players);
            this.router.navigate(['/ten-thousand', 'game']);
        }
    }

    addPlayer() {
        this.playersArray.push(
            this.fb.control('', [Validators.required, Validators.minLength(1)]),
        );
    }

    removePlayer(index: number) {
        this.playersArray.removeAt(index);
    }

    canDeactivate(): boolean {
        return this.myform.dirty && !this.myform.pristine;
    }

    check() {
        console.log('check detection on addPlayer');
    }
}
