import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coderbase-simple-manual-basic-example',
  templateUrl: './simple-manual-basic-example.component.html',
  styleUrls: ['./simple-manual-basic-example.component.scss']
})
export class SimpleManualBasicExampleComponent implements OnInit {
    keyword: any = 'Whatever your want to put here ';
    code = `
      <coderbase-ngx-breadcrumbs>
      <coderbase-ngx-breadcrumb-item [label]="keyword" [route]="['/']">
          <span class="endOfCrumb" >/</span>
      </coderbase-ngx-breadcrumb-item>
      <coderbase-ngx-breadcrumb-item [label]="keyword" [route]="['/']">
          <span class="endOfCrumb" >$</span>
      </coderbase-ngx-breadcrumb-item>
      <coderbase-ngx-breadcrumb-item [label]="keyword" [route]="['/']">
      </coderbase-ngx-breadcrumb-item>
  </coderbase-ngx-breadcrumbs>
`
  constructor() { }

  ngOnInit(): void {
  }

}
