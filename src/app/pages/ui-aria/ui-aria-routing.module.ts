import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAriaComponent } from './ui-aria.component';

const routes: Routes = [{ path: '', component: UiAriaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAriaRoutingModule { }
