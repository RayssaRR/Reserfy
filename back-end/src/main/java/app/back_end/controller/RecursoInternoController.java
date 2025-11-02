package app.back_end.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.back_end.entity.RecursoInterno;
import app.back_end.service.RecursoInternoService;

@RestController
@RequestMapping("/api/recurso-interno")
public class RecursoInternoController {

    @Autowired
    private RecursoInternoService recursoInternoService;

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody RecursoInterno recursoInterno) {
        try {
            recursoInternoService.salvar(recursoInterno);
            return new ResponseEntity<>("Recurso Interno cadastrado com sucesso!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<RecursoInterno>> findAll() {
        try {
            List<RecursoInterno> recursos = recursoInternoService.listarTodos();
            return new ResponseEntity<>(recursos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<RecursoInterno> findById(@PathVariable Long id) {
        try {
            RecursoInterno recurso = recursoInternoService.buscarPorId(id).orElse(null);
            return new ResponseEntity<>(recurso, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
}