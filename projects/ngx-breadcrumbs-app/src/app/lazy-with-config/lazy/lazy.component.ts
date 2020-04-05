import { Component, OnInit } from '@angular/core';
import {OptionsService} from "ngx-breadcrumbs";

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {
    keyword: any = 'im part of breadcrumb'
    private options: OptionsService;

    constructor(private optionsService: OptionsService) {
        this.options = this.optionsService;

        console.group( "MyService Constructor" );
        console.log( "Injected Options" );
        console.log( this.options );
        console.groupEnd();
    }

  ngOnInit(): void {
  }

}
