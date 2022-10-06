import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FluitRoutingModule } from './fluit-routing.module';
import { FluitComponent } from './fluit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FluitComponent
  ],
  imports: [
    CommonModule,
    FluitRoutingModule,
    SharedModule,
    
  ],
  
})
export class FluitModule { }
