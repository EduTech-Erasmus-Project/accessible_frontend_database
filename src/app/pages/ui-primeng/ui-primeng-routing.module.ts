import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiPrimengComponent } from './ui-primeng.component';

const routes: Routes = [{ path: '', component: UiPrimengComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiPrimengRoutingModule { }
