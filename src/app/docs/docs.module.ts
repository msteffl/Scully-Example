import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib-v8';
import {DocsRoutingModule} from './docs-routing.module';
import {DocsComponent} from './docs.component';

@NgModule({
  declarations: [DocsComponent],
  exports: [DocsComponent],
  imports: [CommonModule, DocsRoutingModule, ScullyLibModule],
})
export class DocsModule {}
