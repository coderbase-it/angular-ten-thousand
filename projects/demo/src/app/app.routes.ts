import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'ten-thousand',
        pathMatch:'full'
    },
    {
        path: 'lazy',
        loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule),
    },
    {
      path:"ten-thousand",
      loadChildren: () => import('./modules/ten-thousand-loader/ten-thousand-loader/ten-thousand-loader.module').then(m => m.TenThousandLoaderModule)
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
