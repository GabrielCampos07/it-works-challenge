import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Module } from './shared/module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() modules!: Module;

  @Output() itemClick = new EventEmitter();
}
