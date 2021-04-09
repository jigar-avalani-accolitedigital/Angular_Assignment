import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VilliansComponent } from './villians.component';

const routes: Routes = [{ path: '', component: VilliansComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VilliansRoutingModule { }
