import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    SplitterModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    CardModule,
    ButtonModule,
    SplitterModule
  ]
})
export class SharedModule { }
