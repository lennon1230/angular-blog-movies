import { Component } from '@angular/core';
import { BigCardComponent } from './big-card/big-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BigCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
