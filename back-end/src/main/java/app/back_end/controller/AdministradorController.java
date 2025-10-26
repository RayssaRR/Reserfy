package app.back_end.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.back_end.entity.Administrador;
import app.back_end.service.AdministradorService;

@RestController
@RequestMapping("/api/admin")
public class AdministradorController {
	
	@Autowired
	private AdministradorService administradorService;
	
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody Administrador administrador) {
		try {
			String mensagem = this.administradorService.save(administrador);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> update(@RequestBody Administrador administrador,@PathVariable long id) {
		try {
			String mensagem = this.administradorService.update(administrador, id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}	
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable long id) {
		try {
			String mensagem = this.administradorService.delete(id);
			return new ResponseEntity<>(mensagem, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/findAll")
	public ResponseEntity<List<Administrador>> findAll() {
		try {
			List<Administrador> administradores = this.administradorService.findAll();
			return new ResponseEntity<>(administradores, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/findById/{id}")
	public ResponseEntity<Administrador> findById(@PathVariable long id) {
		try {
			Administrador administrador = this.administradorService.findById(id);
			return new ResponseEntity<>(administrador, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}

}
