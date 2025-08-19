import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id?: number;
  symptoms: string;
  specialist: string;
  date: string;
  time: string;
}
@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',   // ✅ बरोबर HTML फाईल
  styleUrls: ['./appointment.component.css']     // ✅ बरोबर CSS फाईल
})

export class AppointmentComponent {
  appointment: Appointment = { symptoms: '', specialist: '', date: '', time: '' };
  appointments: Appointment[] = [];

  analyze() {
    const symptoms = this.appointment.symptoms.toLowerCase();
    if (symptoms.includes('fever') || symptoms.includes('cough') || symptoms.includes('throat')) {
      this.appointment.specialist = 'General Practitioner';
    } else if (symptoms.includes('heart')) {
      this.appointment.specialist = 'Cardiologist';
    } else if (symptoms.includes('skin')) {
      this.appointment.specialist = 'Dermatologist';
    } else {
      this.appointment.specialist = 'Specialist';
    }
  }

selectSpecialist() {
  if (this.appointment.specialist) {
    alert(`✅ Selected: ${this.appointment.specialist}`);
  } else {
    alert('⚠️ No specialist selected yet.');
  }
}


  bookAppointment() {
    const newAppointment: Appointment = {
      ...this.appointment,
      id: this.appointments.length + 1
    };
    this.appointments.push(newAppointment);

    this.appointment = { symptoms: '', specialist: '', date: '', time: '' };
  }
  
}
