package com.healthcare.backend.service;

import com.healthcare.backend.model.Appointment;
import com.healthcare.backend.repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    private final AppointmentRepository repo;

    public AppointmentService(AppointmentRepository repo) {
        this.repo = repo;
    }

    public Appointment book(Appointment appointment) {
        return repo.save(appointment);
    }

    public List<Appointment> all() {
        return repo.findAll();
    }
}
