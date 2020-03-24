import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LazyComponent} from './lazy.component';
import {LazyChildComponent} from './lazy-child/lazy-child.component';

export const routes: Routes = [
    {
        path: '',
        component: LazyComponent,
        children: [
            {
                path: 'child/:id',
                component: LazyChildComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [LazyComponent, LazyChildComponent],
    exports: [LazyComponent],
})
export class LazyModule {}
