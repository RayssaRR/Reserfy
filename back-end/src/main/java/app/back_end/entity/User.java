package app.back_end.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;

    @Column(unique = true, nullable = false)
    private String email;
    
    private String cpf;
    
    private String telefone;
    
    private String departamento;
    
    private String cargo;

    @Column(nullable = false)
    private String senha;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "admin_email", referencedColumnName = "email")
    @JsonBackReference
    private User adminResponsavel;
    
    @OneToMany(mappedBy = "adminResponsavel", cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<User> usersManaged = new HashSet<>();
    
    private String roleFlag;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getCpf() {return cpf;}
	public void setCpf(String cpf) {this.cpf = cpf;}
	
	
	public String getTelefone() {return telefone;}
	public void setTelefone(String telefone) {this.telefone = telefone;}
	
	public String getDepartamento() {return departamento;}
	public void setDepartamento(String departamento) {this.departamento = departamento;}
	
	
	public String getCargo() {return cargo;}
	public void setCargo(String cargo) {this.cargo = cargo;}
	
	public Set<User> getUsersManaged() {return usersManaged;}
	public void setUsersManaged(Set<User> usersManaged) {this.usersManaged = usersManaged;}
	
	
	public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }

    public User getAdminResponsavel() { return adminResponsavel; }
    public void setAdminResponsavel(User adminResponsavel) { this.adminResponsavel = adminResponsavel; }

	public String getRoleFlag() {return roleFlag;}
	public void setRoleFlag(String roleFlag) {this.roleFlag = roleFlag;}
    
	public void addManagedUser(User addUser) {
	    addUser.setAdminResponsavel(this);
	    usersManaged.add(addUser);
	}

    
}
