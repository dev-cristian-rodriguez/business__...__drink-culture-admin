import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Injections - Services, Providers, etc

export const appConfig: ApplicationConfig = {
  // Here may be Injections or Providers
  providers: [
    provideRouter(routes),
    provideClientHydration(),

    // Injections
    // { provide: 'API_URL', useValue: 'http://localhost:3000' }
  ]
};
