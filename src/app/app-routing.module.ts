import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
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
      import('./pages/ui-primeng/ui-primeng.module').then(
        (m) => m.UiPrimengModule
      ),
  },
  { 
    path: 'fluit', 
    loadChildren: () => 
    import('./pages/fluit/fluit.module').then(
      (m) => m.FluitModule
      ), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
