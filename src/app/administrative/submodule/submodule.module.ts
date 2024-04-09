import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmoduleRoutingModule } from './submodule-routing.module';
import { SubmoduleComponent } from './submodule.component';


@NgModule({
  declarations: [
    SubmoduleComponent
  ],
  imports: [
    CommonModule,
    SubmoduleRoutingModule
  ]
})
export class SubmoduleModule { }
