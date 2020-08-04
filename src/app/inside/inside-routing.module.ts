import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsideComponent } from './components/inside.component'

const routes: Routes = [
{
    path: '',
    component: InsideComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsideRoutingModule { }
