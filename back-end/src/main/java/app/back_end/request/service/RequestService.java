package app.back_end.request.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import app.back_end.auth.entity.User;
import app.back_end.auth.repository.UserRepository;
import app.back_end.request.entity.Request;
import app.back_end.request.entity.StatusRequest;
import app.back_end.resource.entity.RecursoInterno;
import app.back_end.resource.repository.RecursoInternoRepository;
import app.back_end.request.repository.RequestRepository;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private RecursoInternoRepository recursoInternoRepository;

    @Autowired
    private UserRepository userRepository;


    public List<Request> findByResource(Long idResource) {
        return requestRepository.findByResourceId(idResource);
    }

    public Optional<Request> findById(Long id) {
        return requestRepository.findById(id);
    }

    public Optional<Request> findByIdAndResource(Long id, Long idResource) {
        return requestRepository.findByIdAndResourceId(id, idResource);
    }

    public boolean existsByIdAndResource(Long id, Long idResource) {
        return requestRepository.existsByIdAndResourceId(id, idResource);
    }


    public Request createRequest(Long idResource, Request request) {
        RecursoInterno resource = recursoInternoRepository.findById(idResource)
                .orElseThrow(() -> new RuntimeException("Recurso não encontrado"));

        request.setResource(resource);
        request.setStatus(StatusRequest.PENDENTE);


        Long id = request.getUser().getId();

        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado: " + id));

        return requestRepository.save(request);
    }



    public Request update(Long id, Request updated) {

        Request existing = requestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));

        existing.setStartDate(updated.getStartDate());
        existing.setEndDate(updated.getEndDate());
        existing.setStartTime(updated.getStartTime());
        existing.setEndTime(updated.getEndTime());
        existing.setJustification(updated.getJustification());
        existing.setStatus(updated.getStatus());

        return requestRepository.save(existing);
    }


    public void delete(Long id) {
        if (!requestRepository.existsById(id)) {
            throw new RuntimeException("ID da solicitação não existe");
        }
        requestRepository.deleteById(id);
    }


    public List<Request> findAll() {
        return requestRepository.findAll();
    }
}
