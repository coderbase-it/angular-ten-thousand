import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-manual-with-service-config',
  templateUrl: './simple-manual-with-service-config.component.html',
  styleUrls: ['./simple-manual-with-service-config.component.scss']
})
export class SimpleManualWithServiceConfigComponent implements OnInit {
    keyword: any = "Here separator come with global config "

  constructor() { }

  ngOnInit(): void {
  }

}
