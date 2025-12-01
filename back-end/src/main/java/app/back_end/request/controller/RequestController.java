package app.back_end.request.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

import app.back_end.request.entity.Request;
import app.back_end.request.service.RequestService;

@RestController
@RequestMapping("/{roleFlag}/principal/internal-resources/")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping("/requests")
    public ResponseEntity<List<Request>> getAll(
            @PathVariable String roleFlag,
            @PathVariable Long idResource
    ) {
        List<Request> requests = requestService.findByResource(idResource);
        return ResponseEntity.ok(requests);
    }

    @GetMapping("/requests/{id}")
    public ResponseEntity<Request> getById(
            @PathVariable String roleFlag,
            @PathVariable Long idResource,
            @PathVariable Long id
    ) {
        return requestService.findByIdAndResource(id, idResource)
                .map(ResponseEntity::ok)
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("{idResource}/requests/save")
    public ResponseEntity<?> createRequest(
            @PathVariable String roleFlag,
            @PathVariable Long idResource,
            @RequestBody Request request
    ) {
        try {
            if (request.getResource() == null || request.getResource().getId() == null) {
                return ResponseEntity.badRequest().body("É obrigatório associar um recurso à solicitação.");
            }

            if (!request.getResource().getId().equals(idResource)) {
                return ResponseEntity.badRequest().body("O recurso informado não corresponde ao da URL.");
            }

            Request saved = requestService.createRequest(idResource, request);
            return new ResponseEntity<>(saved, HttpStatus.CREATED);

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Falha ao criar a solicitação: " + e.getMessage());
        }
    }

    @PutMapping("/requests/update/{id}")
    public ResponseEntity<?> update(
            @PathVariable String roleFlag,
            @PathVariable Long idResource,
            @PathVariable Long id,
            @RequestBody Request request
    ) {
        try {
            request.setId(id);
            if (request.getResource() == null || request.getResource().getId() == null) {
                return ResponseEntity.badRequest()
                        .body("Uma solicitação deve permanecer associada a um recurso.");
            }

            if (!request.getResource().getId().equals(idResource)) {
                return ResponseEntity.badRequest()
                        .body("A solicitação não pertence ao recurso da URL.");
            }

            Request updated = requestService.update(id, request);
            return ResponseEntity.ok(updated);

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Solicitação não encontrada ou erro ao atualizar.");
        }
    }

    @DeleteMapping("/requests/delete/{id}")
    public ResponseEntity<?> delete(
            @PathVariable String roleFlag,
            @PathVariable Long idResource,
            @PathVariable Long id
    ) {
        try {
            boolean exists = requestService.existsByIdAndResource(id, idResource);

            if (!exists) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Solicitação não encontrada para este recurso.");
            }

            requestService.delete(id);
            return ResponseEntity.noContent().build();

        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Erro ao excluir a solicitação.");
        }
    }
}
