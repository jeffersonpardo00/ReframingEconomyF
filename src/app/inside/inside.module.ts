import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsideRoutingModule } from './inside-routing.module';
import { InsideComponent } from './components/inside.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InsideComponent],
  imports: [
    CommonModule,
    InsideRoutingModule,
    SharedModule
  ]
})
export class InsideModule { }
