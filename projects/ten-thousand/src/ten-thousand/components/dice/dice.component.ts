import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
} from '@angular/core';
import {
    faDiceFive,
    faDiceFour,
    faDiceOne,
    faDiceSix,
    faDiceThree,
    faDiceTwo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'dice',
    templateUrl: './dice.component.html',
    styleUrls: ['./dice.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent implements OnInit, OnChanges {
    @Input() number: number | undefined;
    public faDiceIcon: any;
    constructor() {}

    check() {
        //console.log("Le dice a été actualisé");
    }
    ngOnInit(): void {}

    ngOnChanges() {
        switch (this.number) {
            case 1:
                this.faDiceIcon = faDiceOne;
                break;
            case 2:
                this.faDiceIcon = faDiceTwo;
                break;
            case 3:
                this.faDiceIcon = faDiceThree;
                break;
            case 4:
                this.faDiceIcon = faDiceFour;
                break;
            case 5:
                this.faDiceIcon = faDiceFive;
                break;
            case 6:
                this.faDiceIcon = faDiceSix;
                break;
            default:
                this.faDiceIcon = null;
                break;
        }
    }
}
