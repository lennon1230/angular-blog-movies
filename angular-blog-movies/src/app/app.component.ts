import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderMainComponent } from './pages/index/header-main/header-main.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './navbar/logo/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, IndexComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog-movies';
}
