package app.back_end.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.back_end.entity.RecursoInterno;
import app.back_end.repository.RecursoInternoRepository;

@Service
public class RecursoInternoService {

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;


    public RecursoInterno salvar(RecursoInterno recursoInterno) {
        
        if (recursoInterno.getNome() == null || recursoInterno.getNome().isBlank() ||
            recursoInterno.getCodigo() == null || recursoInterno.getCodigo().isBlank()) {
            throw new IllegalArgumentException("Os campos 'nome' e 'código' são obrigatórios!");
        }


        Optional<RecursoInterno> existente = recursoInternoRepository.findByCodigo(recursoInterno.getCodigo());
        if (existente.isPresent()) {
            throw new IllegalArgumentException("Já existe um recurso interno com esse código!");
        }


        return recursoInternoRepository.save(recursoInterno);
    }



    public List<RecursoInterno> listarTodos() {
        return recursoInternoRepository.findAll();
    }

    public Optional<RecursoInterno> buscarPorId(Long id) {
        return recursoInternoRepository.findById(id);
    }
}