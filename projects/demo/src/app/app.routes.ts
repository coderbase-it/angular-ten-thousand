import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PreviousGameGuard} from 'projects/ten-thousand/src/ten-thousand/guards/previous-game.guard';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'ten-thousand',
        pathMatch: 'full',
    },
    {
        path: 'lazy',
        loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule),
        data: {preload: true},
    },
    {
        path: 'ten-thousand',
        loadChildren: () =>
            import(
                './modules/ten-thousand-loader/ten-thousand-loader/ten-thousand-loader.module'
            ).then(m => m.TenThousandLoaderModule),
        canLoad: [PreviousGameGuard],
        data: {preload: false},
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled',
            enableTracing: true,
            // preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
