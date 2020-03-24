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
        path: 'ten-thousand',
        loadChildren: () =>
            import('./loaders/ten-thousand-loader/ten-thousand-loader.module').then(
                m => m.TenThousandLoaderModule,
            ),
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
            // preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
