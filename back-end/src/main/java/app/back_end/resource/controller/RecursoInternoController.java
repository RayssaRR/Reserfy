package app.back_end.resource.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.service.RecursoInternoService;

@RestController
@RequestMapping("/{roleFlag}/principal/internal-resources")
public class RecursoInternoController {

    @Autowired
    private RecursoInternoService recursoInternoService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody RecursoInterno recursoInterno) {
        try {
            recursoInternoService.save(recursoInterno);
            return new ResponseEntity<>("Recurso Interno cadastrado com sucesso!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listarRecursos() {
        try {
            List<RecursoInterno> recursos = recursoInternoService.listarRecursos();
            return new ResponseEntity<>(recursos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @GetMapping("/{idResource}")
    public ResponseEntity<?> pegarRecurso(@PathVariable Long idResource) {
    	try {
            Optional<RecursoInterno> recursoOpt = recursoInternoService.findById(idResource);

            if (recursoOpt.isPresent()) {
                return ResponseEntity.ok(recursoOpt.get());
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Recurso não encontrado para o id: " + idResource);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Erro ao buscar recurso: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/delete/{idResource}")
    public ResponseEntity<?> delete(@PathVariable Long idResource) {
        try {
            RecursoInterno recursoInterno = recursoInternoService.delete(idResource);
            return new ResponseEntity<>(recursoInterno, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @PutMapping("/update/{idResource}")
    public ResponseEntity<?> update(@PathVariable Long idResource, @RequestBody RecursoInterno updatedResource) {
        try {
            RecursoInterno recursoInterno = recursoInternoService.update(idResource, updatedResource);
            return new ResponseEntity<>(recursoInterno, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


}
