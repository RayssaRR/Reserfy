package app.back_end.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.back_end.entity.User;
import app.back_end.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User saveUser(User user) {
    	if (user.getEmail() == null || user.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email é obrigatório");
        }
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }
        String adminEmail = user.getAdminResponsavel().getEmail();
        User savedAdmin = userRepository.findByEmail(adminEmail);
        if (savedAdmin.getEmail() == null) throw new RuntimeException("Administrador não encontrado");

        user.setRoleFlag("ROLE_USER");
        user.setAdminResponsavel(savedAdmin);
        savedAdmin.addManagedUser(user);

        return userRepository.save(user);
    }
    

    public User saveAdmin(User admin) {
    	if (admin.getEmail() == null || admin.getEmail().isBlank()) {
            throw new IllegalArgumentException("Email é obrigatório");
        }
    	
        if (userRepository.existsByEmail(admin.getEmail())) {
            throw new RuntimeException("Email já cadastrado");
        }
        
        
        admin.setAdminResponsavel(null);
        admin.setRoleFlag("ROLE_ADMIN");
        
        return userRepository.save(admin);
    }

    public User findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null) {
            throw new RuntimeException("Usuário não encontrado");
        }
        return user;
    }
    
    public User update(User user) {
        User userFound = userRepository.findByEmail(user.getEmail());
        
        if (userFound == null) {
            throw new RuntimeException("Usuário não encontrado");
        }

        BeanUtils.copyProperties(user, userFound, "id", "email");

        return userRepository.save(userFound);
    }

}
