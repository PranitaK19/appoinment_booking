package com.healthcare.backend.controller;

import com.healthcare.backend.model.Appointment;
import com.healthcare.backend.service.AppointmentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@CrossOrigin(origins = "http://localhost:4200")   // Angular app port
public class AppointmentController {

    private final AppointmentService service;

    public AppointmentController(AppointmentService service) {
        this.service = service;
    }

    @PostMapping("/book")
    public ResponseEntity<Appointment> book(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(service.book(appointment));
    }

    @GetMapping
    public List<Appointment> getAll() {
        return service.all();
    }
}
