import { Component, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
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

  constructor() {
    this.email = new FormControl('');
    this.password = new FormControl('');

    this.loading = false;
    this.additionalMessage = '';
    this.status = '';
  }

  async submitEvent(event: Event): Promise<void> {
    event.preventDefault();
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.additionalMessage = "Login successful";
      this.status = 'success';
    }, 4000);
  }

}


// @NgModule({
//   declarations: [LoginComponent],
//   exports: [LoginComponent]
// })

// export class LoginComponentModule {
// }
