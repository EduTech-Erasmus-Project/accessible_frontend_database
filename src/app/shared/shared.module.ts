import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {SplitterModule} from 'primeng/splitter';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
    SplitterModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    CardModule,
    ButtonModule,
    SplitterModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
