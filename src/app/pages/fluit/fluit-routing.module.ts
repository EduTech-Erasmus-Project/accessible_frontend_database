import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluitComponent } from './fluit.component';

const routes: Routes = [{ path: '', component: FluitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluitRoutingModule { }
