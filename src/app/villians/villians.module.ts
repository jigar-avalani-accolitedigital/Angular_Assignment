import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VilliansRoutingModule } from './villians-routing.module';
import { VilliansComponent } from './villians.component';


@NgModule({
  declarations: [VilliansComponent],
  imports: [
    CommonModule,
    VilliansRoutingModule
  ]
})
export class VilliansModule { }
