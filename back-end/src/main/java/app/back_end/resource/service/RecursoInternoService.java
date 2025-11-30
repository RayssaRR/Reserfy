package app.back_end.resource.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.repository.RecursoInternoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class RecursoInternoService {

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    public RecursoInterno save(RecursoInterno recursoInterno) {

        recursoInternoRepository.findByName(recursoInterno.getName())
            .ifPresent(r -> {
                throw new IllegalArgumentException("Já existe um recurso com esse nome!");
            });

        return recursoInternoRepository.save(recursoInterno);
    }


    public List<RecursoInterno> listarRecursos() {
        return recursoInternoRepository.findAll();
    }
    
    public Optional<RecursoInterno> findById(Long idResource) {
    	return recursoInternoRepository.findById(idResource);
    }

    public RecursoInterno delete(Long idResource) {
        RecursoInterno recursoInterno = recursoInternoRepository.findById(idResource)
            .orElseThrow(() -> new RuntimeException("Recurso não encontrado"));

        recursoInternoRepository.delete(recursoInterno);
        return recursoInterno;
    }
    
    public RecursoInterno update(Long idResource, RecursoInterno updatedResource) {
        RecursoInterno recursoInterno = recursoInternoRepository.findById(idResource)
                .orElseThrow(() -> new RuntimeException("Recurso não encontrado"));

        recursoInterno.setName(updatedResource.getName());
        recursoInterno.setCategory(updatedResource.getCategory());
        recursoInterno.setStatus(updatedResource.getStatus());
        recursoInterno.setLocation(updatedResource.getLocation());
        recursoInterno.setDescription(updatedResource.getDescription());

        return recursoInternoRepository.save(recursoInterno);
    }

}
