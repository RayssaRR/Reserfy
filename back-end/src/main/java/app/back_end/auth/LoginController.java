package app.back_end.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/login")
	public ResponseEntity<String> logar(@RequestBody Login login) {
		try {
            String token = loginService.logar(login);
    		return new ResponseEntity<>(token, HttpStatus.OK);
        } catch (Exception e) {
    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        }		
	}
	
	@PostMapping("/register")
    public ResponseEntity<String> registrar(@RequestBody User user) {
        try {
        	String message = loginService.register(user);    		
        	return new ResponseEntity<>(message, HttpStatus.OK);
        } catch (Exception e) {
    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);

        }		
	}

}