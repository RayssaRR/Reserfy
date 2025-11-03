package app.back_end.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;

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
    
    @GetMapping("/list")
    public ResponseEntity<Page<RecursoInterno>> listarRecursos(
    		@RequestParam(defaultValue = "0") int page,
    		@RequestParam(defaultValue = "10") int size,
    		@RequestParam(required = false) String status) {
    	
    	Page<RecursoInterno> recursos = recursoInternoService.listarRecursos(page, size, status);
    	return new ResponseEntity<>(recursos, HttpStatus.OK);
    }
}
