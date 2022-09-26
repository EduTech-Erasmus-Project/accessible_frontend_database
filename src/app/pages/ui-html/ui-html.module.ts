import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiHtmlRoutingModule } from './ui-html-routing.module';
import { UiHtmlComponent } from './ui-html.component';


@NgModule({
  declarations: [
    UiHtmlComponent
  ],
  imports: [
    CommonModule,
    UiHtmlRoutingModule
  ]
})
export class UiHtmlModule { }
