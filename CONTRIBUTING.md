

Obrigado por contribuir com o Reserfy!
Este documento descreve como instalar o ambiente, executar o projeto e participar do desenvolvimento seguindo boas práticas de versionamento e colaboração.

 ---
## 1. Pré-requisitos

**Para rodar o projeto completo, instale:**

**Back-end (Spring Boot – Java)**
- Java JDK 17
- Maven 3+
- IDE recomendada: **IntelliJ IDEA ou Spring Tools Suite (STS)**

**Front-end (Angular)**
- Node.js v16 ou v18
- Angular CLI:

|npm install -g @angular/cli|

- IDE recomendada: VS Code

**Banco de Dados**

- MySQL Server 8.0+
- MySQL Workbench ou DBeaver

**Ferramentas adicionais**

- Git
- Navegador atualizado (Chrome/Firefox)
  
---
## 2. Como configurar o ambiente local

**2.1 Clonar o repositório**

| git clone https://github.com/RayssaRR/Reserfy.git 
  cd Reserfy |

**2.2 Configurar o Banco de Dados MySQL**

- Inicie o MySQL Server
- Crie o banco:

|CREATE DATABASE reserfy;|

- Configure suas credenciais no arquivo:

| backend/src/main/resources/application.properties |

Exemplo:

| spring.datasource.url=jdbc:mysql://localhost:3306/reserfy |

| spring.datasource.username=root |

| spring.datasource.password=sua_senha |

| spring.jpa.hibernate.ddl-auto=update |

---
## 3. Como rodar o projeto

**3.1 Rodar o Back-end**

Dentro da pasta /backend:

| mvn clean install |

| mvn spring-boot:run |

O servidor iniciará em:
http://localhost:8080

**3.2 Rodar o Front-end**

Dentro da pasta /frontend:

| npm install |

|  ng serve |

A aplicação ficará disponível em:
http://localhost:4200

---
##  4. Como rodar os testes

**Back-end:**
| mvn test |

**Front-end:**
| ng test |

---
## 5. Fluxo de Contribuição (Git Workflow)

1. Criar uma branch nova para cada funcionalidade ou correção:

| git checkout -b feature/nome-da-feature |

2. Fazer as alterações necessárias
3. Testar o projeto localmente
4. Realizar commits pequenos e frequentes:

| git commit -m "feat: adiciona fluxo de aprovação de reservas" |

--- 
## 6. Como abrir um Pull Request (PR)

1. Enviar sua branch:

| git push origin feature/nome-da-feature |
 
2. Abrir o PR no GitHub direcionado para:
   - branch principal do projeto (main ou develop)

3. Adicionar ao PR:
   - descrição do que foi feito
   - screenshots se necessário
   - referência a issues (#id)
   - Esperar a revisão.
     
---
## 7. Deployment (Ambiente de Produção)

O Reserfy possui deploy hospedado
O link de produção deve ser mantido atualizado no README:

| https://URL-do-deploy-aqui.com |

Sempre que novas funcionalidades forem implementadas:
- atualizar o deploy
- gravar um screencast demonstrando a URL funcionando
- enviar ao README
