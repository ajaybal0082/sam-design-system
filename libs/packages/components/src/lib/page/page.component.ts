import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sds-page',
  template: `
    <div><ng-content></ng-content></div>
  `
})
export class SdsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'sds-page-options',
  template: `
    <div class="position-relative"><ng-content></ng-content></div>
  `
})
export class SdsPageOptionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
