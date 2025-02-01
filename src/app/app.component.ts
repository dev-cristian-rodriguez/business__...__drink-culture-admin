import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

// Components
import { NavbarComponentModule } from './components/layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponentModule, CommonModule, RouterOutlet],
  template: `
  <main>
     <app-navbar *ngIf="showNavbar"></app-navbar>

    <router-outlet></router-outlet>
  </main>
  `,
})

export class AppComponent {
  showNavbar: boolean = false;

  constructor(private router: Router) {
    if (this.router.url === '/login') {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }

    afterNextRender(() => {
      console.log('AppComponent');
    });
  }
}
