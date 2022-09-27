import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiAriaRoutingModule } from './ui-aria-routing.module';
import { UiAriaComponent } from './ui-aria.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ButtonComponent } from './components/button/button.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    UiAriaComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    UiAriaRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class UiAriaModule { }
