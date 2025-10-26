package app.back_end.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.back_end.entity.Administrador;
import app.back_end.repository.AdministradorRepository;

@Service
public class AdministradorService {
	
	@Autowired
	private AdministradorRepository administradorRepository;
	
	
	public String save(Administrador administrador) {
		this.administradorRepository.save(administrador);
		return "Administrador Cadastrado !";
	}
	
	public String update(Administrador administrador, long id) {
		administrador.setId(id);
		this.administradorRepository.save(administrador);
		return "Administrador Atualizado !";
	}
	
	public String delete(long id) {
		this.administradorRepository.deleteById(id);
		return "Administrador Deletado !";
	}
	
	public List<Administrador> findAll() {
		List<Administrador> administradores = this.administradorRepository.findAll();
		return administradores;
	}
	
	public Administrador findById(long id) {
		Administrador administrador = this.administradorRepository.findById(id).get();
		return administrador;
	}
}
