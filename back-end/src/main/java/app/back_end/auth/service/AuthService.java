package app.back_end.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import app.back_end.auth.dto.LoginRequest;
import app.back_end.auth.dto.RegisterRequest;
import app.back_end.auth.entity.User;
import app.back_end.auth.repository.UserRepository;
import app.back_end.auth.security.JwtServiceGenerator;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtServiceGenerator jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String logIn(LoginRequest login) {
        if (login == null || login.getEmail() == null || login.getPassword() == null) {
            throw new IllegalArgumentException("Email e senha são obrigatórios");
        }

        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                login.getEmail(),
                login.getPassword()
            )
        );

        User user = userRepository.findByEmail(login.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        return jwtService.generateToken(user);
    }

    
    public String register(RegisterRequest register) {
        if (userRepository.findByEmail(register.getEmail()).isPresent()) {
            throw new RuntimeException("Email já cadastrado");
        }

        User newUser = new User();
        newUser.setEmail(register.getEmail());
        newUser.setName(register.getName());
        newUser.setRoleFlag(register.getRoleFlag());
        newUser.setCpf(register.getCpf());
        newUser.setDepartment(register.getDepartment());
        newUser.setPosition(register.getPosition());
        newUser.setPhone(register.getPhone());

        newUser.setPassword(passwordEncoder.encode(register.getPassword()));

        userRepository.save(newUser);

        String token = jwtService.generateToken(newUser);
        return token;
    }

}
