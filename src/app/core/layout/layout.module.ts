import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [HeaderComponent, MenuComponent]
})
export class LayoutModule { }
