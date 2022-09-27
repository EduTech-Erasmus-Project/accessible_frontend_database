import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    AccordionComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent
  ]
})
export class ComponentsModule { }
