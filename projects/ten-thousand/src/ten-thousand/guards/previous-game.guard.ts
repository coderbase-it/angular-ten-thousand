import {Injectable} from '@angular/core';
import {CanActivate, CanDeactivate, CanLoad} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AddPlayerComponent} from '../containers/add-player/add-player.component';

@Injectable({
    providedIn: 'root',
})
export class PreviousGameGuard
    implements CanActivate, CanDeactivate<AddPlayerComponent>, CanLoad {
    constructor() {}

    canLoad(): boolean | Observable<boolean> | Promise<boolean> {
        return true;
    }

    canDeactivate(component: AddPlayerComponent): boolean {
        return component.canDeactivate()
            ? window.confirm('Etes-vous sûr de quitter ?')
            : true;
        //throw new Error("Method not implemented.");
    }

    canActivate(): Observable<boolean> | Promise<boolean> {
        return of(true);
    }
}
