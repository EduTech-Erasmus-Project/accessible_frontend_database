import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { RadioComponent } from './components/radio/radio.component';
import { UiPrimengComponent } from './ui-primeng.component';

const routes: Routes = [
  { path: '', component: UiPrimengComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'combobox', component: ComboboxComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPrimengRoutingModule { }
