import { Component, afterNextRender } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// Injection is to separate logic from the view

// Components
import { LoadersComponentModule } from '../../components/common/loaders/loaders.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoadersComponentModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  // Variables
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  loading: boolean = false;
  additionalMessage: string = '';
  status: string = '';

  constructor(private router: Router) {
    afterNextRender(() => {
      // If Token does not exist, redirect to login
      if (window.localStorage.getItem("token")) {
        this.router.navigate(['/dashboard/list']);
      }
    });
  }

  async submitEvent(event: Event): Promise<void> {
    event.preventDefault();

    if (this.email.value === '' || this.password.value === '') {
      this.additionalMessage = "Email and password are required";
      this.status = 'error';
      return;
    }

    if (this.email.value !== "cristianestiven1111@gmail.com") {
      this.additionalMessage = "Invalid email";
      this.status = 'error';
      return;
    }

    if (this.password.value !== "123123") {
      this.additionalMessage = "Invalid password";
      this.status = 'error';
      return;
    }

    this.loading = true;
    this.additionalMessage = "Login successful";
    this.status = 'success';

    setTimeout(() => {
      window.localStorage.setItem("token", "1234567890");
      this.router.navigate(['/dashboard/list'])
    }, 4000);
  }

}


// @NgModule({
//   declarations: [LoginComponent],
//   exports: [LoginComponent]
// })

// export class LoginComponentModule {
// }
