import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Module } from '../shared/module';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() modules!: Module;

  @Output() menuItemClick = new EventEmitter();

  menuClick(route: string) {
    if (route) this.menuItemClick.emit(route);
  }
}
