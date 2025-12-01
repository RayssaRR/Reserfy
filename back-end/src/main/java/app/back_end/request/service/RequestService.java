package app.back_end.request.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.back_end.request.entity.Request;
import app.back_end.request.entity.StatusRequest;
import app.back_end.request.repository.RequestRepository;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public Request save(Request request) {
        return requestRepository.save(request);
    }

    public List<Request> findAll() {
        return requestRepository.findAll();
    }

    public Request findById(Long idRequest) {
        return requestRepository.findById(idRequest)
            .orElseThrow(() -> new RuntimeException("Solicitação não encontrada"));
    }

    public Request delete(Long idRequest) {
        Request request = findById(idRequest);
        requestRepository.delete(request);
        return request;
    }
    
    public Request update(Long idRequest, Request updatedRequest) {
        Request request = findById(idRequest);

        request.setStatus(updatedRequest.getStatus());

        return requestRepository.save(request);
    }

    public List<Request> findByStatus(String status) {
        StatusRequest statusEnum;
        try {
            statusEnum = StatusRequest.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Status inválido: " + status);
        }
        return requestRepository.findByStatus(statusEnum);
    }

    public Request approve(Long idRequest) {
        Request request = findById(idRequest);

        if (request.getResource().getStatus() == StatusEnum.EM_MANUTENCAO) {
            throw new RuntimeException("Não é possível aprovar reserva: o recurso está em manutenção.");
        }
        
        request.setStatus(StatusRequest.APROVADA);
        return requestRepository.save(request);
    }

    public Request reject(Long idRequest) {
        Request request = findById(idRequest);
        request.setStatus(StatusRequest.REJEITADA);
        return requestRepository.save(request);
    }

    public List<Request> findByResourceId(Long resourceId) {
        return requestRepository.findByResource_Id(resourceId);
    }
}
