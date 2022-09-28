import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComboboxComponent } from './combobox/combobox.component';
import { AcordionComponent } from './acordion/acordion.component';
import { CalendarComponent } from './calendar/calendar.component';


@NgModule({
  declarations: [
    ComboboxComponent,
    AcordionComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
