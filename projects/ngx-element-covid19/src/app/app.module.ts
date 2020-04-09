import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {createCustomElement} from "@angular/elements";
import { PushPipe } from './pipes/push.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PushPipe
    ],
  imports: [
    BrowserModule,
      HttpClientModule,
      ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        if (!customElements.get('ngx-element-covid19'))
        {
            const externalTileCE = createCustomElement(AppComponent, { injector: this.injector });
            customElements.define('ngx-element-covid19', externalTileCE);
        }



    }
}
