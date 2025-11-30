package app.back_end.request.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import app.back_end.request.entity.Request;
import app.back_end.request.service.RequestService;

@RestController
@RequestMapping("/{roleFlag}/principal/reservations")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping("/list")
    public ResponseEntity<?> listar() {
        try {
            List<Request> reservas = requestService.findAll();
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<?> buscarPorStatus(@PathVariable String status) {
        try {
            List<Request> reservas = requestService.findByStatus(status);
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> aprovar(@PathVariable Long id) {
        try {
            Request reserva = requestService.approve(id);
            return new ResponseEntity<>(reserva, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/reject/{id}")
    public ResponseEntity<?> rejeitar(@PathVariable Long id) {
        try {
            Request reserva = requestService.reject(id);
            return new ResponseEntity<>(reserva, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/filter")
    public ResponseEntity<?> buscarPorRecurso(@RequestParam Long resourceId) {
        try {
            List<Request> reservas = requestService.findByResourceId(resourceId);
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
