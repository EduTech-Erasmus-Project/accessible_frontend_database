import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonComponent } from './button/button.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    AccordionComponent,
    ButtonComponent,
    ComboboxComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
