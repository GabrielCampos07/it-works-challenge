import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';




@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatExpansionModule],
})
export class MaterialModule {}
