import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DocsComponent} from './docs.component';

const routes: Routes = [
  {
    path: ':docid',
    component: DocsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}

