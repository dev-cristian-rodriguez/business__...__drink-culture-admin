import { CommonModule } from '@angular/common';
import { Component, afterNextRender } from '@angular/core';
import { Router, ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

// Components
import { NavbarComponentModule } from '../../components/layout/navbar/navbar.component';
import { CollectionComponentModule } from '../../components/custom/collection/collection.component';
import { FormComponentModule } from "../../components/custom/form/form.component"
import { TableComponentModule } from '../../components/custom/table/table.component';
import { DetailComponentModule } from '../../components/custom/detail/detail.component';
import { PreviewComponentModule } from '../../components/custom/preview/preview.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [CommonModule, NavbarComponentModule,
    RouterLink, RouterLinkActive,
    CollectionComponentModule, FormComponentModule,
    TableComponentModule, DetailComponentModule,
    PreviewComponentModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})

export class WorkspaceComponent {
  currentLocation: string = this.router.url;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.activatedRoute.snapshot.params['id']);

    afterNextRender(() => {
      // If Token does not exist, redirect to login
      if (!window.localStorage.getItem("token")) {
        this.router.navigate(['/login']);
      }

      console.log(this.currentLocation);
    });
  }


}
