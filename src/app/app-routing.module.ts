import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'aria',
    loadChildren: () =>
      import('./pages/ui-aria/ui-aria.module').then((m) => m.UiAriaModule),
  },
  {
    path: 'html',
    loadChildren: () =>
      import('./pages/ui-html/ui-html.module').then((m) => m.UiHtmlModule),
  },
  {
    path: 'primeng',
    loadChildren: () =>
      import('./pages/ui-primeng/ui-primeng.module').then((m) => m.UiPrimengModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
