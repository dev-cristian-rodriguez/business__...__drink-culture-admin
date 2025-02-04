import { Routes } from '@angular/router';

import { HomeComponentf } from '../views/home/home.component';

// Public route
import { LoginComponent } from "../views/login/login.component";

// Authenticated route
import { WorkspaceComponent } from '../views/workspace/workspace.component';
// import { ListComponent } from '../views/dashboard/list/list.component';
// import { FormComponent } from '../views/dashboard/form/form.component';
// import { DetailComponent } from '../views/dashboard/detail/detail.component';

// Not found component
import { NotFoundComponent } from '../components/errors/not-found/not-found.component';


export const routes: Routes = [
  // Public routes
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    title: 'Login'
  },

  // Authenticated routes
  {
    path: 'dashboard',
    pathMatch: 'prefix',
    children: [
      {
        path: 'overview',
        pathMatch: 'prefix',
        component: WorkspaceComponent ,
        title: 'Overview'
      },

      {
        path: 'table/:id',
        pathMatch: 'prefix',
        component: WorkspaceComponent,
        title: 'List'
      },

      {
        path: 'form',
        pathMatch: 'prefix',
        children: [
          {
            path: 'create',
            pathMatch: 'prefix',
            component: WorkspaceComponent,
            title: 'Form - Create'
          },
          {
            path: 'update/:id',
            pathMatch: 'prefix',
            component: WorkspaceComponent,
            title: 'Form - update'
          }
        ]
      },

      {
        path: 'detail/:id',
        pathMatch: 'prefix',
        component: WorkspaceComponent,
        title: 'Detail'
      },

      {
        path: 'preview/:id',
        pathMatch: 'prefix',
        component: WorkspaceComponent,
        title: 'Preview'
      },
    ]
  },

  // Not found
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
    title: 'Not Found'
  }
];
