import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { MenuButtonCloseComponent } from './menu-button-close/menu-button-close.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuButtonCloseComponent, NgStyle],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {}
