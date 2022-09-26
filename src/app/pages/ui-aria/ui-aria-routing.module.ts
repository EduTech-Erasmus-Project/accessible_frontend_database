import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Button } from 'primeng/button';
import { ButtonComponent } from './components/button/button.component';
import { UiAriaComponent } from './ui-aria.component';

const routes: Routes =
  [
    {
      path: '', component: UiAriaComponent,
    },
    {
      path: "button",
      component: ButtonComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAriaRoutingModule { }
