package app_back_end.maintenance.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import app_back_end.maintenance.entity.Maintenance;
import app_back_end.maintenance.entity.MaintenanceStatus;
import app_back_end.maintenance.service.MaintenanceService;

@RestController
@RequestMapping("/{roleFlag}/principal/maintenances")
public class MaintenanceController {

    @Autowired
    private MaintenanceService maintenanceService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/schedule")
    public ResponseEntity<?> schedule(@RequestBody Maintenance maintenance) {
        try {
            Maintenance m = maintenanceService.create(maintenance);
            return new ResponseEntity<>(m, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listAll() {
        return ResponseEntity.ok(maintenanceService.listAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> find(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(maintenanceService.findById(id));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/status/{id}")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) {
        try {
            MaintenanceStatus s = MaintenanceStatus.valueOf(status.toUpperCase());
            return ResponseEntity.ok(maintenanceService.updateStatus(id, s));
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}