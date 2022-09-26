import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiAriaRoutingModule } from './ui-aria-routing.module';
import { UiAriaComponent } from './ui-aria.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    UiAriaComponent
  ],
  imports: [
    CommonModule,
    UiAriaRoutingModule,
    ComponentsModule
  ]
})
export class UiAriaModule { }
