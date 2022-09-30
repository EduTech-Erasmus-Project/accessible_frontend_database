import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcordionComponent } from './components/acordion/acordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { UiHtmlComponent } from './ui-html.component';

const routes: Routes = [
  {
    path: '',
    component: UiHtmlComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'combobox',
    component: ComboboxComponent
  },
  {
    path: 'acordion',
    component: AcordionComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'checkbox',
    component: CheckboxComponent
  },
  {
    path: 'radiobutton',
    component: RadiobuttonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiHtmlRoutingModule { }
