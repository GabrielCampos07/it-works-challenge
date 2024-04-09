import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Module } from '../shared/module';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  @Input() module!: Module;

  @Output() menuItemClick = new EventEmitter();

  panelOpenState: boolean = false;
  subModuleName: string = '';

  constructor() { }

  menuClick(route: string) {
    if (route) this.menuItemClick.emit(route);
  }

  replaceNameSpaces(subModuleName: string): string {
    return subModuleName.replace(/\s+/g, '-');
  }
}
