import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { NgxBreadcrumbsComponent } from './ngx-breadcrumbs.component';
import { NgxBreadcrumbsService } from './services/ngx-breadcrumbs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoderbaseNgxBreadcrumbsComponent } from './coderbase-ngx-breadcrumbs/coderbase-ngx-breadcrumbs.component';
import { CoderbaseNgxBreadcrumbItemComponent } from './coderbase-ngx-breadcrumb-item/coderbase-ngx-breadcrumb-item.component';
import {OptionsService} from "./services/options.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbItemComponent],
    exports: [NgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbsComponent, CoderbaseNgxBreadcrumbItemComponent],
  providers: [NgxBreadcrumbsService]
})
export class NgxBreadcrumbsModule {

    // I setup the module providers for the root application.
    static forRoot(options?: { globalSeparator: string }) : ModuleWithProviders {

        return({
            ngModule: NgxBreadcrumbsModule,
            providers: [
                // In order to translate the raw, optional OPTIONS argument into an
                // instance of the MyServiceOptions TYPE, we have to first provide it as
                // an injectable so that we can inject it into our FACTORY FUNCTION.
                {
                    provide: FOR_ROOT_OPTIONS_TOKEN,
                    useValue: options
                },
                // Once we've provided the OPTIONS as an injectable, we can use a FACTORY
                // FUNCTION to then take that raw configuration object and use it to
                // configure an instance of the MyServiceOptions TYPE (which will be
                // implicitly consumed by the MyService constructor).
                {
                    provide: OptionsService,
                    useFactory: provideMyServiceOptions,
                    deps: [ FOR_ROOT_OPTIONS_TOKEN ]
                }

                // NOTE: We don't have to explicitly provide the MyService class here
                // since it will automatically be picked-up using the "providedIn"
                // Injectable() meta-data.
            ]
        });

    }

    static forChild( options?: ModuleOptions ) : ModuleWithProviders {

        return({
            ngModule: NgxBreadcrumbsModule,
            providers: [
                // In order to translate the raw, optional OPTIONS argument into an
                // instance of the MyServiceOptions TYPE, we have to first provide it as
                // an injectable so that we can inject it into our FACTORY FUNCTION.
                {
                    provide: FOR_CHILD_OPTIONS_TOKEN,
                    useValue: options
                },
                // Once we've provided the OPTIONS as an injectable, we can use a FACTORY
                // FUNCTION to then take that raw configuration object and use it to
                // configure an instance of the MyServiceOptions TYPE (which will be
                // implicitly consumed by the MyService constructor).
                {
                    provide: OptionsService,
                    useFactory: provideMyServiceOptions,
                    deps: [ FOR_CHILD_OPTIONS_TOKEN ]
                }

                // NOTE: We don't have to explicitly provide the MyService class here
                // since it will automatically be picked-up using the "providedIn"
                // Injectable() meta-data.
            ]
        });


    }
}

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

// I define the shape of the optional configuration data passed to the forRoot() method.
export interface ModuleOptions {
    globalSeparator?: number;
}

// I am the token that makes the raw options available to the following factory function.
// --
// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export let FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>( "forRoot() OptionsService configuration." );

export let FOR_CHILD_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>( "forChild() OptionsService configuration." );

// I translate the given raw OPTIONS into an instance of the MyServiceOptions TYPE. This
// will allows the MyService class to be instantiated and injected with a fully-formed
// configuration class instead of having to deal with the Inject() meta-data and a half-
// baked set of configuration options.
// --
// NOTE: This value has to be exported otherwise the AoT compiler won't see it.
export function provideMyServiceOptions( options?: ModuleOptions ) : OptionsService {

    let optionsService = new OptionsService();

    // If the optional options were provided via the .forRoot() static method, then apply
    // them to the MyServiceOptions Type provider.
    if ( options ) {

        if (  options.globalSeparator  ) {

            optionsService.globalSeparator = options.globalSeparator;

        }


    }

    return( optionsService );

}
