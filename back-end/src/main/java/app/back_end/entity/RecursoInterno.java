package app.back_end.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "recurso_interno")
public class RecursoInterno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    @Column(nullable = false)
    private String categoria; 

    @Column(nullable = false)
    private String status; 
    
    @Transient
    private String statusDisponibilidade;

    private String localizacao;
    private String responsavel; 
    private String descricao;
    private int quantidade;


    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public String getStatusDisponibilidade() { return quantidade > 0 ? "disponível" : "indisponível"; }
    public void setStatusDisponibilidade(String statusDisponibilidade) { this.statusDisponibilidade = statusDisponibilidade; }

    public String getLocalizacao() { return localizacao; }
    public void setLocalizacao(String localizacao) { this.localizacao = localizacao; }

    public String getResponsavel() { return responsavel; }
    public void setResponsavel(String responsavel) { this.responsavel = responsavel; }

    public String getDescricao() { return descricao; }
    public void setDescricao(String descricao) { this.descricao = descricao; }
    
    public int getQuantidade() { return quantidade; }
    public void setQuantidade(int quantidade) { this.quantidade = quantidade; }
    
}
