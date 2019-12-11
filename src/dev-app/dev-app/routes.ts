/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Routes} from '@angular/router';
import {DevApp404} from './dev-app-404';
import {DevAppHome} from './dev-app-home';

export const DEV_APP_ROUTES: Routes = [
  {path: '', component: DevAppHome},
  {path: 'footer', loadChildren: 'footer/footer-demo-module#FooterDemoModule'},
  {path: 'actions-menu', loadChildren: 'actions-menu/actions-menu.module#ActionsMenuDemoModule'},
  {path: '**', component: DevApp404},
];
