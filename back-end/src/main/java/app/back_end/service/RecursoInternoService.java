package app.back_end.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import app.back_end.entity.RecursoInterno;
import app.back_end.repository.RecursoInternoRepository;

import java.util.Optional;

@Service
public class RecursoInternoService {

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    public RecursoInterno salvar(RecursoInterno recursoInterno) {

        if (recursoInterno.getNome() == null || recursoInterno.getNome().isBlank() ||
            recursoInterno.getCategoria() == null || recursoInterno.getCategoria().isBlank() ||
            recursoInterno.getStatus() == null || recursoInterno.getStatus().isBlank()) {
            throw new IllegalArgumentException("Os campos 'nome', 'categoria' e 'status' são obrigatórios!");
        }


        Optional<RecursoInterno> existente = recursoInternoRepository.findByNome(recursoInterno.getNome());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("Já existe um recurso com esse nome!");
        }

        return recursoInternoRepository.save(recursoInterno);
    }
    
    public Page<RecursoInterno> listarRecursos(int page, int size, String status) {
    	Pageable pageable = PageRequest.of(page, size);
    	
    	Page<RecursoInterno> recursos;
    	
    	 if (status != null && !status.isBlank()) {
    	        recursos = recursoInternoRepository.findByStatus(status, pageable);
    	    } else {
    	        recursos = recursoInternoRepository.findAll(pageable);
    	    }
    	
    	return recursos;
    }
}
