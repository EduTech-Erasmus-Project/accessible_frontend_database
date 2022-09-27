import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { UiHtmlComponent } from './ui-html.component';

const routes: Routes = [{ path: '', component: UiHtmlComponent },
{
path: 'button',
component:ButtonComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiHtmlRoutingModule { }
