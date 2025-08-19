import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Appointment {
  id?: number;
  symptoms: string;
  specialist: string;
  date: string;
  time: string;
}

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/appointments';

  constructor(private http: HttpClient) {}

  bookAppointment(a: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}/book`, a);
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.baseUrl);
  }
  getAppointments(): Observable<Appointment[]> {
  return this.http.get<Appointment[]>(this.baseUrl);
}

}
