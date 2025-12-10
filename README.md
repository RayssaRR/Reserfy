# Sistema de Controle de Recursos Internos  

Este documento apresenta as diretrizes de desenvolvimento e práticas ágeis adotadas no **Sistema de Controle de Recursos Internos**, com base no framework **Scrum** e nos princípios da **Engenharia de Software Moderna**.  
O sistema tem como objetivo centralizar e otimizar o gerenciamento de recursos corporativos — como salas, veículos e equipamentos — evitando conflitos de reserva, assegurando transparência e promovendo o uso eficiente dos ativos internos.

---

## 1️⃣ Planejamento Inicial  

**Objetivo:** Estruturar o desenvolvimento do projeto com clareza de escopo, definição de papéis e organização do backlog inicial.  

**Definição do Escopo:**  
O sistema abrange funcionalidades essenciais voltadas ao controle completo do ciclo de vida dos recursos internos:  

- **Cadastro e manutenção de recursos internos**.  
- **Consulta e listagem geral de recursos disponíveis** com indicadores de status.  
- **Filtros e busca personalizada**.  
- **Edição e exclusão controlada** de recursos.  
- **Solicitação, aprovação e cancelamento de reservas**.  
- **Painel pessoal de reservas** com acompanhamento por status.  
- **Registro e acompanhamento de incidentes ou ocorrências.**  
- **Abertura de manutenções preventivas e corretivas.**  
- **Agenda visual de disponibilidade**.  
- **Notificações automáticas** sobre aprovações, cancelamentos e alterações de status.  
- **Sugestão automática de recursos alternativos** quando o item desejado estiver indisponível.  
- **Histórico completo de uso e auditoria de recursos.**

**Papéis Scrum:**  
- **Product Owner (PO):** Define prioridades e garante que as entregas atendam às necessidades organizacionais.  
- **Scrum Master (SM):** Facilita as cerimônias ágeis e remove impedimentos.  
- **Development Team (Dev Team):** Implementa, testa e documenta as funcionalidades.  

**Ferramentas:**  

Utilização de **boards Kanban/Scrum**, **GitHub Projects**, **Trello** e versionamento via **Git/GitHub**.  
🔗 [GITHUB](https://github.com/RayssaRR/Reserfy)  

<img width="717" height="498" alt="PrintTrello" src="https://github.com/user-attachments/assets/869c3ba3-cf79-4980-a37c-cb0dbd8bd1ce" />
<img width="1322" height="636" alt="Screenshot from 2025-12-10 16-16-06" src="https://github.com/user-attachments/assets/af42ac48-06f5-4cbd-81df-6a71fe396eb2" />
<img width="1335" height="637" alt="Screenshot from 2025-12-10 16-23-21" src="https://github.com/user-attachments/assets/4a373a13-dfb7-4ab1-9b44-d2e9e6ba55d3" />

🔗 [TRELLO](https://trello.com/b/9leuU1jk/projetos-2)


---

## 2️⃣ Cartões de Gestão Ágil  

### 2.1 Cartão de Tarefa  
**Finalidade:** registrar e acompanhar o progresso das funcionalidades.  
Cada cartão deve conter:  
- Título e descrição;  
- Responsável;  
- Datas de início e entrega;  
- Prioridade e status (Backlog → Em andamento → Em revisão → Concluída);  
- Critérios de aceite e checklist de validação.  

### 2.2 Cartão de Conversa  
Registra decisões, discussões e dúvidas relacionadas a uma funcionalidade. Mantém histórico centralizado de comunicação entre PO, SM e Dev Team.  

### 2.3 Cartão de Confirmação  
Utilizado para validar a entrega conforme os critérios de aceite definidos no backlog.  
Somente tarefas revisadas e aprovadas são movidas para **Concluída**.  

---

## 3️⃣ Etapas de Entrega — Sprints  

**Planejamento da Sprint (Sprint Planning):**  
- Seleção das tarefas prioritárias;  
- Quebra de histórias em subtarefas técnicas;  
- Definição de critérios de aceite claros.  

**Execução da Sprint:**  
- Desenvolvimento colaborativo com **Pair Programming**;  
- Atualização contínua de cartões;  
- Revisões de código (Pull Requests).  

**Revisão da Sprint (Sprint Review):**  
- Demonstração das funcionalidades entregues;  
- Validação com o PO e coleta de feedback.  

**Retrospectiva (Sprint Retrospective):**  
- Análise do desempenho da equipe;  
- Identificação de melhorias para o próximo ciclo.  

---

## 4️⃣ Gestão de Issues e Bugs  

**Objetivo:** registrar e acompanhar falhas, melhorias e incidentes durante o desenvolvimento.  
Cada issue deve conter:  
- Descrição detalhada;  
- Passos para reprodução;  
- Responsável;  
- Prioridade e status.
- Ferramentas recomendadas: **GitHub Issues**, **Jira**.  

---

## 5️⃣ Fluxo de Uso do Sistema  

O fluxo representa a jornada do usuário e do administrador dentro do sistema:  

### 🧭 Fluxo Geral  

1. **Administrador cadastra os recursos internos**, definindo categoria, status, localização e responsável.  
2. **Usuários acessam a listagem** e consultam recursos disponíveis, com filtros e buscas específicas.  
3. **Usuários solicitam reservas** informando datas ou turnos desejados.  
4. **Administrador analisa e aprova ou rejeita** as solicitações de reserva.  
5. **Sistema envia notificações automáticas** de aprovação, rejeição ou cancelamento.  
6. **Usuários podem cancelar solicitações pendentes**, com histórico atualizado.  
7. **Painel de reservas pessoais** permite visualizar reservas ativas, pendentes e concluídas.  
8. **Registro de incidentes ou ocorrências** é feito diretamente pelo usuário ou responsável.  
9. **Administrador agenda manutenções preventivas**, bloqueando reservas durante o período.  
10. **Agenda visual** mostra em tempo real a disponibilidade de cada recurso.  
11. **Sugestões automáticas de alternativas** são exibidas para recursos indisponíveis.  
12. **Histórico completo de uso** e incidentes pode ser consultado para auditoria e planejamento.


<img width="8922" height="7866" alt="Figma" src="https://github.com/user-attachments/assets/d9bf6e3a-08f4-441c-b0fe-50557cfe773d" />
🔗 [FIGMA](https://www.figma.com/design/LznJPWhEptMYSr51bsEMAL/FDS?node-id=0-1&p=f&t=qVT9gyhbwtBuq4MD-0)

---

## 6️⃣ Programação em Pares (Pair Programming)  

**Driver:** escreve o código.  
**Navigator:** revisa e propõe melhorias em tempo real.  
**Benefícios:** melhora na qualidade, menor retrabalho e aprendizado coletivo.  

---

## 7️⃣ Testes e Critérios de Aceite  

Cada funcionalidade é validada com base em critérios específicos:  

- **Validação de campos obrigatórios e unicidade de cadastros.**  
- **Exibição imediata de novos registros e atualizações.**  
- **Bloqueio de reservas em períodos conflitantes ou durante manutenção.**  
- **Confirmação visual de ações (sucesso, erro, cancelamento).**  
- **Notificações automáticas de mudanças de status.**  
- **Atualização dinâmica da agenda e histórico.**  
- **Sugestão automática de alternativas disponíveis.**

Os testes incluem **unitários**, **de integração** e **de interface**, garantindo estabilidade e confiabilidade em cada entrega.  

---

## 8️⃣ Deploy e Demonstração  

**Deploy:** realizado em ambiente de teste e produção.  
**Demonstração de Telas:**  
- Cadastro e listagem de recursos;  
- Fluxo completo de reserva e aprovação;  
- Registro e acompanhamento de incidentes;  
- Exibição da agenda interativa e notificações automáticas.  

A demonstração é acompanhada de feedback do PO e validação dos critérios de aceite.  



https://github.com/user-attachments/assets/73f15c5d-cf6c-44e2-9f57-f09905edbe76

https://github.com/user-attachments/assets/71ca7085-39d4-4202-b235-abf4abab6b77




---

## 9️⃣ Fluxo Completo do Projeto  

1. Planejamento do backlog com definição de prioridades.  
2. Criação de tarefas e critérios de aceite.  
3. Desenvolvimento em pair programming.  
4. Revisão e testes automatizados.  
5. Registro de issues e correções.  
6. Deploy e demonstração funcional.  
7. Retrospectiva e ajustes para a próxima sprint.  

---

## 🔍 1️⃣0️⃣ Funcionalidades Principais  

| Categoria | Funcionalidade | Responsável | Valor Entregue |
|------------|----------------|-------------|----------------|
| Recursos | Cadastro, edição e exclusão de recursos | Administrador | Base confiável e atualizada de ativos internos |
| Consulta | Listagem e filtros dinâmicos | Usuário | Acesso rápido às informações |
| Reservas | Solicitação, aprovação, rejeição e cancelamento | Usuário / Administrador | Controle transparente do uso de recursos |
| Manutenção | Registro de incidentes e manutenções preventivas | Administrador | Garantia de disponibilidade e segurança |
| Notificações | Alertas automáticos sobre atualizações | Usuário / Administrador | Comunicação eficiente e rastreável |
| Visualização | Agenda interativa e mapa de disponibilidade | Usuário | Planejamento facilitado e visão clara de uso |
| Inteligência | Sugestão automática de alternativas | Sistema | Otimização do tempo e aproveitamento de recursos |
| Histórico | Log completo de uso e incidentes | Administrador | Auditoria e tomada de decisão baseada em dados |

---

### 🧩 Resumo Final  

Ao adotar práticas ágeis, papéis bem definidos e entregas incrementais, o **Sistema de Controle de Recursos Internos** promove:  
- **Organização e rastreabilidade** de todos os recursos corporativos;  
- **Automação de reservas e notificações**;  
- **Manutenção preventiva inteligente**;  
- **Fluxo visual intuitivo e eficiente**;  
- **Qualidade garantida por critérios de aceite e testes contínuos.**  

Assim, o sistema assegura **transparência, eficiência e controle total** sobre o uso dos recursos internos da organização.
