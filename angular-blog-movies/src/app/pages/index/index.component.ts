import { Component } from '@angular/core';
import { HeaderMainComponent } from './header-main/header-main.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderMainComponent, MainComponent, AsideComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
