import { HomeComponentf } from './home/home.component';
import { LoginComponent } from "./login/login.component"
import {AppComponent} from "./app.component";

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home-component/from-app', component: HomeComponentf },
  { path: 'login-component', component: LoginComponent },

];
