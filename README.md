# Sistema de Controle de Recursos Internos

Facilite a gestão de recursos compartilhados da empresa — como salas de reunião, carros corporativos, notebooks e equipamentos de TI — evitando conflitos de reserva, otimizando o uso e garantindo transparência no acesso.

## Sumário

- [Descrição do Projeto](#descrição-do-projeto)  
- [Funcionalidades](#funcionalidades)  
- [Fluxo de Uso](#fluxo-de-uso)  
- [Equipe e Responsabilidades](#equipe-e-responsabilidades)  
- [Tecnologias Utilizadas](#tecnologias-utilizadas)  
- [Como Executar o Projeto](#como-executar-o-projeto)  
- [Estrutura de Endpoints](#estrutura-de-endpoints)  
- [Funcionalidades Extras (Opcional)](#funcionalidades-extras-opcional)  
- [Benefícios](#benefícios)  
- [Contribuição](#contribuição)  
- [Licença](#licença)

---

## Descrição do Projeto

O **Sistema de Controle de Recursos Internos** tem como objetivo centralizar e organizar a reserva de recursos da empresa.  
A plataforma permite que funcionários verifiquem a disponibilidade de salas, equipamentos e veículos, realizem reservas e que gestores acompanhem estatísticas e histórico de uso.

---

## Funcionalidades

### CRUD de Recursos
- Cadastrar novos recursos (salas, carros, notebooks, etc.).
- Editar informações (capacidade, placa, modelo, etc.).
- Ativar ou desativar recursos conforme disponibilidade.

### CRUD de Reservas
- Criar reservas informando recurso, data/hora e responsável.
- Editar ou cancelar reservas existentes.
- Validação automática para evitar conflitos de horário.

### Visualização de Agenda
- Exibição de reservas em formato agenda semanal/mensal.
- Filtros por tipo de recurso.
- Lista detalhada de reservas por recurso.

### Relatórios e Estatísticas 
- Tempo médio de uso por recurso.
- Recursos mais demandados.
- Horários de pico de uso.

---

## Fluxo de Uso

1. O funcionário acessa a página de Salas de Reunião.  
2. Verifica que a sala desejada está livre no horário.  
3. Cria uma reserva → o sistema valida → reserva confirmada.  
4. Outro funcionário tenta reservar no mesmo horário → sistema bloqueia e sugere alternativas.  
5. O RH acessa estatísticas e identifica recursos subutilizados, otimizando seu uso.

---

## Equipe e Responsabilidades

| Nome                 | Papel                  | Responsabilidades principais                                    |
|-----------------------|-------------------------|------------------------------------------------------------------|
| Product Owner (PO)    | -                       | Priorizar backlog, coletar requisitos, visão do produto          |
| Felipe Lopes          | UX/UI Designer          | Criação das interfaces e protótipos interativos                  |
| Jennifer Zeferino     | Front-End Developer     | Desenvolvimento das interfaces responsivas                       |
| José Leandro          | Back-End Developer      | Lógica de negócio, banco de dados e APIs                          |
| Raiele Leite          | QA / Testes             | Planejamento e execução de testes                                |
| Rayssa Santana        | Full Stack Developer    | Integrações e suporte transversal                                |

---

## Tecnologias Utilizadas

### Backend
- Spring Boot
- PostgreSQL ou MySQL
- Endpoints REST:
  - `/recursos`
  - `/reservas`
  - `/usuarios`

### Frontend
- Angular
- Componentes:
  - Página inicial com menu
  - Lista de Recursos
  - Formulário de Reserva
  - Agenda de Reservas (Calendário)
  - Detalhe do Recurso + reservas associadas

Este projeto está sob a licença MIT.  
Sinta-se livre para usar, modificar e distribuir.
