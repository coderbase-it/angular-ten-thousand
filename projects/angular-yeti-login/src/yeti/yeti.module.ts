import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YetiLoginComponent } from './yeti-login/yeti-login.component';



@NgModule({
  declarations: [YetiLoginComponent],
  imports: [
    CommonModule
  ],
    exports: [ YetiLoginComponent]
})
export class YetiModule { }
