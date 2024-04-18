import { Component } from '@angular/core';
import { SmallCardComponent } from './small-card/small-card.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

}
