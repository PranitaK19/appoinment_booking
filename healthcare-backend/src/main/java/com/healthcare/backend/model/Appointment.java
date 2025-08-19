package com.healthcare.backend.model;

import jakarta.persistence.*;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String symptoms;
    private String specialist;
    private String date;   // store as string (YYYY-MM-DD)
    private String time;   // e.g. "09:00 AM"

    public Appointment() {}

    public Appointment(String symptoms, String specialist, String date, String time) {
        this.symptoms = symptoms;
        this.specialist = specialist;
        this.date = date;
        this.time = time;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSymptoms() { return symptoms; }
    public void setSymptoms(String symptoms) { this.symptoms = symptoms; }

    public String getSpecialist() { return specialist; }
    public void setSpecialist(String specialist) { this.specialist = specialist; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
}
