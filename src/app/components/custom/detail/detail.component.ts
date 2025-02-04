import { Component, afterNextRender, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: false,
  // imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  id: string = this.activatedRoute.snapshot.params["id"];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    afterNextRender(() => {
      // If Token does not exist, redirect to login
      if (!window.localStorage.getItem("token")) {
        this.router.navigate(['/login']);
      }
    });
  }
}


@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule],
  exports: [DetailComponent]
})

export class DetailComponentModule {

}
