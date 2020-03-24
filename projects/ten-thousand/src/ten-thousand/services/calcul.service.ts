import {Injectable, Input} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CalculService {
    @Input() numbersDices = 5;
    private dices: number[] = [];
    public dices$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
    public score$ = new BehaviorSubject(0);
    public dicesScore: number[] = [];
    public sock$ = new BehaviorSubject(false);

    rollDices() {
        if (this.sock$.value) {
            this.sock$.next(false);
            alert('new player');
            this.score$.next(0);
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
            const cache = this.score$.value;

            this.score$.next(cache + 1500);
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
                const cache = this.score$.value;

                this.score$.next(cache + combinaison.value * 100);
                this.numbersDices -= 3;
                this.dicesScore = this.dices.filter(i => i === combinaison.val);
                // on doit supprimer les dés qui on cette valeur
                this.dices = this.dices.filter(i => i !== combinaison.val);
            }
        });
        // On calcul les carré

        this.dices.forEach((dice, index) => {
            // on doit ici faire les calculs , 1 ou 5

            if (dice === 1) {
                const cache = this.score$.value;

                this.score$.next(cache + 100);
                this.clearDice(index);
                score = true;
            }

            if (dice === 5) {
                const cache = this.score$.value;

                this.score$.next(cache + 50);
                this.clearDice(index);
                score = true;
            }
        });

        if (!score) {
            this.sock$.next(true);
            // ajout les dés de la chaussette au dé finaux
            this.dicesScore.push(...this.dices);
            // réinitilise le nombre de dés
            this.numbersDices = 5;
        }

        this.dices$.next(this.dices);
    }

    clearDice(index: number) {
        // sauvegarde du dé dans le compteur de score
        this.dicesScore.push(this.dices[index]);
        // suppresion du dé
        delete this.dices[index];
        // réajustement du nombre de dé à lancé
        this.numbersDices -= 1;
    }
    constructor() {}
}
