import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiAriaRoutingModule } from './ui-aria-routing.module';
import { UiAriaComponent } from './ui-aria.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UiAriaComponent
  ],
  imports: [
    CommonModule,
    UiAriaRoutingModule,
    SharedModule
  ]
})
export class UiAriaModule { }
