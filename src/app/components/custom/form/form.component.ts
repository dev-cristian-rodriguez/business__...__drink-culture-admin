import { Component, afterNextRender } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // Variables
  title: string = this.router.url === '/dashboard/form/create' ? 'Create' : 'Update';
  id : string = this.activatedRoute.snapshot.params['id'];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    console.log(this.activatedRoute.snapshot.params['id']);

    afterNextRender(() => {
      // If Token does not exist, redirect to login
      if (!window.localStorage.getItem("token")) {
        this.router.navigate(['/login']);
      }
    });
  }

  f () {
    this.activatedRoute
  }
}
