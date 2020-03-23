import {Component, Input, OnInit} from '@angular/core';
import {IPlayer} from '../../interfaces/player';
import {PlayersService} from '../../services/players.service';
import {PalierService} from '../../services/palier.service';

@Component({
    selector: 'launch-dices',
    templateUrl: './launch-dices.component.html',
    styleUrls: ['./launch-dices.component.css'],
})
export class LaunchDicesComponent implements OnInit {
    @Input() numbersDices = 5;
    public dices: number[] = [];
    public score = 0;
    public dicesScore: number[] = [];
    public sock = false;
    public players: IPlayer[] = [];
    constructor(
        private playerService: PlayersService,
        public palierService: PalierService,
    ) {}

    ngOnInit(): void {
        this.players = this.playerService.players;
    }

    rollDices() {
        if (this.sock) {
            this.sock = false;
            alert('new player');
            this.score = 0;
            this.dicesScore = [];
        }

        // reinitialise le tableau
        this.dices = [];

        // création du lancés aléatoire
        for (let i = 0; i < this.numbersDices; i++) {
            this.dices.push(Math.ceil(Math.random() * 6));
        }

        // tslint:disable-next-line:no-console
        console.log(this.dices);

        this.analyzeDices();
    }
    analyzeDices() {
        let score = false;

        // on vérifie d'abord les suites
        // on vérifie la suite 1 2 3 4 5
        if (
            (this.dices.includes(1) &&
                this.dices.includes(2) &&
                this.dices.includes(3) &&
                this.dices.includes(4) &&
                this.dices.includes(5)) ||
            (this.dices.includes(2) &&
                this.dices.includes(3) &&
                this.dices.includes(4) &&
                this.dices.includes(5) &&
                this.dices.includes(6))
        ) {
            this.score += 1500;
            this.dicesScore = this.dices;
            this.dices = [];
        }

        const brelans = [
            {val: 1, value: 10},
            {val: 2, value: 2},
            {val: 3, value: 3},
            {val: 4, value: 4},
            {val: 5, value: 5},
        ];

        // on calcul les brelans
        brelans.forEach(combinaison => {
            if (this.dices.filter(i => i === combinaison.val).length === 3) {
                this.score += combinaison.value * 100;
                this.numbersDices -= 3;
                this.dicesScore = this.dices.filter(i => i === combinaison.val);
                // on doit supprimer les dés qui on cette valeur
                this.dices = this.dices.filter(i => i !== combinaison.val);
            }
        });

        this.dices.forEach((dice, index) => {
            // on doit ici faire les calculs , 1 ou 5

            if (dice === 1) {
                this.score += 100;
                this.clearDice(index);
                score = true;
            }

            if (dice === 5) {
                this.score += 50;
                this.clearDice(index);
                score = true;
            }
        });

        if (!score) {
            this.sock = true;
        }

        if (this.numbersDices === 0) {
            this.dices = [0];
        }
    }

    clearDice(index: number) {
        // sauvegarde du dé dans le compteur de score
        this.dicesScore.push(this.dices[index]);
        // suppresion du dé
        delete this.dices[index];
        // réajustement du nombre de dé à lancé
        this.numbersDices -= 1;
    }
    get scorePartie() {
        return this.score;
    }
}
