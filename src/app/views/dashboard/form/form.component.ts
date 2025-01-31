import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title: string

  constructor(private router: Router) {
    // If Token does not exist, redirect to login
    if (!window.localStorage.getItem("token")) {
      console.log('Token does not exist');
      this.router.navigate(['/login']);
    }

    this.title = window.location.pathname === '/dashboard/form/create' ? 'Create' : 'Update';
  }
}
