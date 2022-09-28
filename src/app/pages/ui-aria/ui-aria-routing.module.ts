import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { UiAriaComponent } from './ui-aria.component';

const routes: Routes = [
  {
    path: '',
    component: UiAriaComponent,
  },
  { path: 'accordion', component: AccordionComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'combobox', component: ComboboxComponent },
  { path: 'calendar', component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiAriaRoutingModule {}
