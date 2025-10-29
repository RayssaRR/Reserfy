package app.back_end.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import app.back_end.entity.User;
import app.back_end.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/save-user")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        try {
        	User savedUser = userService.saveUser(user);
            return new ResponseEntity<>(savedUser, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/save-admin")
    public ResponseEntity<User> saveAdmin(@RequestBody User user) {
        try {
            User savedAdmin = userService.saveAdmin(user);
            return new ResponseEntity<>(savedAdmin, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }
    
    
    @PutMapping("/update")
    public ResponseEntity<User> update(@RequestBody User user) {
		try {
			User userUpdate = this.userService.update(user);
			return new ResponseEntity<>(userUpdate, HttpStatus.OK);
			
		} catch(Exception e) {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}	
	}
    
}
