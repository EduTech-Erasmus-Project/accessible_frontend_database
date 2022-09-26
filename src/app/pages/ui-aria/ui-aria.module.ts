import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiAriaRoutingModule } from './ui-aria-routing.module';
import { UiAriaComponent } from './ui-aria.component';


@NgModule({
  declarations: [
    UiAriaComponent
  ],
  imports: [
    CommonModule,
    UiAriaRoutingModule
  ]
})
export class UiAriaModule { }
