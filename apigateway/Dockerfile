# Usa una imagen base con Maven y OpenJDK 17 para compilar el proyecto
FROM maven:3.8.6-openjdk-17-focal AS build

# Crea el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y el directorio src para que Maven instale las dependencias
COPY pom.xml .
COPY src ./src

# Ejecuta el clean install para construir el archivo .jar
RUN mvn clean install -DskipTests

# Dockerfile para el API Gateway
FROM eclipse-temurin:17-jdk-focal

# Crea el directorio de la aplicación
WORKDIR /app

# Copia el archivo JAR generado
COPY target/apigateway-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto del API Gateway
EXPOSE 8088

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
