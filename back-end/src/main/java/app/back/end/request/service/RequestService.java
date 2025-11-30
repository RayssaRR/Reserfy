package app.back.end.request.service;


import java.util.List;

import app.back_end.request.entity.Request;

public interface RequestService {
    List<Request> listarTodas();
    List<Request> buscarPorStatus(String status);
    Request aprovar(Long id);
    Request rejeitar(Long id);
    List<Request> buscarPorRecurso(String nome);
}
