import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

// Injection is to separate logic from the view

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email: FormControl;
  password: FormControl;

  loading: boolean;
  additionalMessage: string;
  status: string;

  constructor(private router: Router) {
    // If Token exists, redirect to dashboard
    if (window.localStorage.getItem("token")) {
      this.router.navigate(['/dashboard/list']);
    }

    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loading = false;
    this.additionalMessage = '';
    this.status = '';
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

    window.localStorage.setItem("token", "1234567890");
    this.router.navigate(['/dashboard/list'])


    // setTimeout(() => {
    //   window.localStorage.setItem("token", "1234567890");
    //   this.additionalMessage = "Login successful";
    //   this.status = 'success';
    // }, 4000);

    // setTimeout(() => {
    //   this.loading = false;
    //   this.router.navigate(['/dashboard/list'])
    // }, 2000);
  }

}


// @NgModule({
//   declarations: [LoginComponent],
//   exports: [LoginComponent]
// })

// export class LoginComponentModule {
// }
