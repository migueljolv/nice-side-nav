import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { EventBus } from '../EventBus';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isOpen = false;

  constructor(private ngZone: NgZone) {
    EventBus.on('toggle-side-nav', this.handleToggleSideNavEvent);
  }

  handleToggleSideNavEvent = (data: any) => {
    this.ngZone.run(() => {
      this.isOpen = data.opened;
    });
  };

  handleToggleSideNav() {
    this.isOpen = !this.isOpen;
  }
}
