package app.back_end.request.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import app.back_end.request.entity.Request;
import app.back.end.request.service.RequestService;

@RestController
@RequestMapping("/{roleFlag}/principal/reservas")
public class RequestController {

    @Autowired
    private RequestService requestService;

    // LISTAR TODAS
    @GetMapping("/list")
    public ResponseEntity<?> listar() {
        try {
            List<Request> reservas = requestService.listarTodas();
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // FILTRAR POR STATUS (APROVADA, PENDENTE, RECUSADA)
    @GetMapping("/status/{status}")
    public ResponseEntity<?> buscarPorStatus(@PathVariable String status) {
        try {
            List<Request> reservas = requestService.buscarPorStatus(status);
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // APROVAR RESERVA
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/approve/{id}")
    public ResponseEntity<?> aprovar(@PathVariable Long id) {
        try {
            Request reserva = requestService.aprovar(id);
            return new ResponseEntity<>(reserva, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // REJEITAR RESERVA
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/reject/{id}")
    public ResponseEntity<?> rejeitar(@PathVariable Long id) {
        try {
            Request reserva = requestService.rejeitar(id);
            return new ResponseEntity<>(reserva, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    // BUSCAR PELO NOME DO RECURSO
    @GetMapping("/filter")
    public ResponseEntity<?> buscarPorRecurso(@RequestParam String nome) {
        try {
            List<Request> reservas = requestService.buscarPorRecurso(nome);
            return new ResponseEntity<>(reservas, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
