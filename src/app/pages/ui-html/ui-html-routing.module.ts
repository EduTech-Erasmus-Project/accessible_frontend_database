import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiHtmlComponent } from './ui-html.component';

const routes: Routes = [{ path: '', component: UiHtmlComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiHtmlRoutingModule { }
