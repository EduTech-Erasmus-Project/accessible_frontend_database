import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { UiAriaComponent } from './ui-aria.component';

const routes: Routes = [
  {
    path: '',
    component: UiAriaComponent,
  },
  { path: 'accordion', component: AccordionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiAriaRoutingModule {}
