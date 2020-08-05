import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleService } from './services/people/people.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PeopleService
  ]
})

export class CoreModule { }