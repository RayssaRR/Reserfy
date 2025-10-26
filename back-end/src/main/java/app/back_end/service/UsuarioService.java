package app.back_end.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import app.back_end.entity.Usuario;
import app.back_end.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	
	public String save(Usuario usuario) {
		this.usuarioRepository.save(usuario);
		return "Usuário Cadastrado !";
	}
	
	public String update(Usuario usuario, long id) {
		usuario.setId(id);
		this.usuarioRepository.save(usuario);
		return "Usuário Atualizado !";
	}
	
	public String delete(long id) {
		this.usuarioRepository.deleteById(id);
		return "Usuário Deletado !";
	}
	
	public List<Usuario> findAll() {
		List<Usuario> usuarios = this.usuarioRepository.findAll();
		return usuarios;
	}
	
	public Usuario findById(long id) {
		Usuario usuario = this.usuarioRepository.findById(id).get();
		return usuario;
	}
}
