package app.back_end.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.back_end.entity.Usuario;
import app.back_end.service.UsuarioService;

@RestController
@RequestMapping("/api/user")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Usuario usuario) {
		try {
			String mensagem = this.usuarioService.save(usuario);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> update(@RequestBody Usuario usuario,@PathVariable long id) {
		try {
			String mensagem = this.usuarioService.update(usuario, id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}	
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable long id) {
		try {
			String mensagem = this.usuarioService.delete(id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/findAll")
	public ResponseEntity<List<Usuario>> findAll() {
		try {
			List<Usuario> usuarios = this.usuarioService.findAll();
			return new ResponseEntity<>(usuarios, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/findById/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable long id) {
		try {
			Usuario usuario = this.usuarioService.findById(id);
			return new ResponseEntity<>(usuario, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}

}
