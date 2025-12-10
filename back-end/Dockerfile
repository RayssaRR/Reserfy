# -------- STAGE 1: BUILD --------
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia todo o back-end para dentro da imagem
COPY . .

# Gera o JAR (sem rodar testes)
RUN mvn clean package -DskipTests



# -------- STAGE 2: RUN --------
FROM eclipse-temurin:17-jdk

# Diretório onde o JAR vai rodar
WORKDIR /app

# Copia o JAR gerado no stage de build
COPY --from=build /app/target/*.jar app.jar

# Expõe a porta (Render vai substituir com PORT automaticamente)
EXPOSE 8080

# Comando que inicia o servidor
ENTRYPOINT ["java", "-jar", "app.jar"]
