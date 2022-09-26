import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPrimengRoutingModule } from './ui-primeng-routing.module';
import { UiPrimengComponent } from './ui-primeng.component';


@NgModule({
  declarations: [
    UiPrimengComponent
  ],
  imports: [
    CommonModule,
    UiPrimengRoutingModule
  ]
})
export class UiPrimengModule { }
