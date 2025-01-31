import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  // If Token does not exist, redirect to login
  constructor(private router: Router) {
    if (!window.localStorage.getItem("token")) {
      this.router.navigate(['/login']);
    }
  }
}
