import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  template: `
     <main>
         <h1> Login View </h1>
         <!-- <li><a routerLink="/login-component" routerLinkActive="active">First Component</a></li> -->
     </main>
  `,
  // templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}


@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginComponentModule {}
