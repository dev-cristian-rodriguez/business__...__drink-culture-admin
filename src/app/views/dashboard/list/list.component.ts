import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl : './list.component.css',
})

export class ListComponent {
  constructor(private router: Router) {
    // If Token does not exist, redirect to login
    if (!window.localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
  }
}
