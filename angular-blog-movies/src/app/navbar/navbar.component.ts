import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, MenuComponent, MenuButtonComponent, NgStyle],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  displayBtnMenu :string = 'flex';
  isActive :boolean = true;

  btnMenu(){
    this.displayBtnMenu = 'none';
    this.isActive = false;
  }

  btnClose(){
    this.isActive = true;
    this.displayBtnMenu = 'flex';
  }
}
