import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppointmentComponent } from './app/appointment/appointment.component';

const routes: Routes = [
  { path: '', component: AppointmentComponent },
  // इथे नंतर अजून routes add करू शकतो (history, notifications वगैरे)
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
