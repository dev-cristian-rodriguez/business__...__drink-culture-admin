import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Other options
// import { HomeComponent } from "./app/home/home.component"

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
