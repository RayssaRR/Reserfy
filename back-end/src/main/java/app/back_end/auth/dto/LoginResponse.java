package app.back_end.auth.dto;

public class LoginResponse {

    private String token;
    private String tipo = "Bearer";
    private Long id;
    private String name;
    private String email;
    private String roleFlag;


    public LoginResponse() {
    }

    public LoginResponse(String token, Long id, String name, String email, String roleFlag) {
        this.token = token;
        this.id = id;
        this.name = name;
        this.email = email;
        this.roleFlag = roleFlag;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRoleFlag() {
        return roleFlag;
    }

    public void setRoleFlag(String roleFlag) {
        this.roleFlag = roleFlag;
    }

}
