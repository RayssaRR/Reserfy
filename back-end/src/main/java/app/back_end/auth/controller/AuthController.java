package app.back_end.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.back_end.auth.dto.LoginRequest;
import app.back_end.auth.dto.RegisterRequest;
import app.back_end.auth.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	private AuthService authService;

	@PostMapping("/login")
	public ResponseEntity<String> logar(@RequestBody LoginRequest login) {
		try {
            String token = authService.logIn(login);
    		return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (Exception e) {
    		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }		
	}
	
	@PostMapping("/register")
    public ResponseEntity<String> registrar(@RequestBody RegisterRequest registerRequest) {
        try {
        	String message = authService.register(registerRequest);    		
        	return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (Exception e) {
    		return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);

        }		
	}

}