import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';   // ⬅️ हे import कर
import { AppointmentComponent } from './appointment/appointment.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, AppointmentComponent],  // ⬅️ RouterModule add केला
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Healthcare Appointment System';
}
