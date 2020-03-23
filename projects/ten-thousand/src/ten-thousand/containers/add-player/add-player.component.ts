import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {PlayersService} from '../../services/players.service';

@Component({
    selector: 'add-player',
    templateUrl: './add-player.component.html',
    styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
    public myform: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private playerService: PlayersService,
    ) {}

    ngOnInit(): void {
        this.createForm();
    }

    createForm() {
        this.myform = this.fb.group({
            name: '',
        });
    }

    register() {
        // tslint:disable-next-line:no-console
        console.log(this.myform.value);
        this.playerService.register(this.myform.value);
        this.router.navigate(['/ten-thousand', 'game']);
    }
}
