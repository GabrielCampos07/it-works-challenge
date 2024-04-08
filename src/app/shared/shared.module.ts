import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';


@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule],
  declarations: [],
})
export class SharedModule {}