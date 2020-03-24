import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate, CanLoad, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AddPlayerComponent} from '../containers/add-player/add-player.component';
import {StockageService} from '../services/stockage.service';

@Injectable({
    providedIn: 'root',
})
export class PreviousGameGuard
    implements CanActivate, CanDeactivate<AddPlayerComponent>, CanLoad {
    constructor(private _stockage: StockageService, private _router: Router) {}

    canLoad(): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }

    canDeactivate(component: AddPlayerComponent): boolean {
        return component.canDeactivate()
            ? window.confirm('Etes-vous sûr de quitter ?')
            : true;
    }

    canActivate(): Observable<boolean> | Promise<boolean> {
        if (this._stockage.partieSauvegarder()) {
            this._router.navigate(['/ten-thousand', 'game']);

            return of(true);
        } else {
            this._router.navigate(['/ten-thousand', 'add']);

            return of(true);
        }
    }
}
