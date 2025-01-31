import { HomeComponentf } from '../views/home/home.component';
import { LoginComponent } from "../views/login/login.component";

// Not found component
import { NotFoundComponent } from '../components/errors/not-found/not-found.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home-component', component: HomeComponentf },
  { path: '**', component: NotFoundComponent }
];
