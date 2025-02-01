import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  // imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

}

@NgModule({
  declarations: [NavbarComponent],
  imports: [],
  exports: [NavbarComponent]
})

export class NavbarComponentModule {
}
