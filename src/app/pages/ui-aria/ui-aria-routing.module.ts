import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiAriaComponent } from './ui-aria.component';

const routes: Routes =
  [
    {
      path: '', component: UiAriaComponent
      , children: [
        {
          path: "button",
          loadChildren: () =>
            import("./components/button/button.component").then((m) => m.ButtonComponent),
        },
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiAriaRoutingModule { }
