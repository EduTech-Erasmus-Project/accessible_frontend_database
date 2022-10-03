import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPrimengRoutingModule } from './ui-primeng-routing.module';
import { UiPrimengComponent } from './ui-primeng.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    UiPrimengComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    UiPrimengRoutingModule,
  ]
})
export class UiPrimengModule { }
