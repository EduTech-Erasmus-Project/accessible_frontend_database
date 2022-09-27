import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiHtmlRoutingModule } from './ui-html-routing.module';
import { UiHtmlComponent } from './ui-html.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UiHtmlComponent
  ],
  imports: [
    CommonModule,
    UiHtmlRoutingModule,
    SharedModule
  ]
})
export class UiHtmlModule { }
