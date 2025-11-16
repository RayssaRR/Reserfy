package app.back_end.resource.service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import org.springframework.stereotype.Service;

import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.repository.RecursoInternoRepository;

import java.util.Optional;

@Service
public class RecursoInternoService {

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    public RecursoInterno save(RecursoInterno recursoInterno) {

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
    
    public List<RecursoInterno> listarRecursos() {
        return recursoInternoRepository.findAll();
    }
}
