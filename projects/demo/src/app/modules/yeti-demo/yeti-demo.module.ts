import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YetiDemoRoutingModule } from './yeti-demo-routing.module';
import { LoginComponent } from './login/login.component';
import {YetiModule} from "angular-yeti-login";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    YetiDemoRoutingModule,
      YetiModule
  ]
})
export class YetiDemoModule { }
