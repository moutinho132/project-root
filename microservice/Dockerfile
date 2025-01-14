# Usa una imagen base con Maven y OpenJDK 17 para compilar el proyecto
FROM maven:3.8.6-openjdk-17-focal AS build

# Crea el directorio de trabajo
WORKDIR /app

# Copia el archivo pom.xml y el directorio src para que Maven instale las dependencias
COPY pom.xml .
COPY src ./src

# Ejecuta el clean install para construir el archivo .jar
RUN mvn clean install -DskipTests

# Dockerfile para el microservicio
FROM eclipse-temurin:17-jdk-focal

# Crea el directorio de la aplicación
WORKDIR /app


# Copia el archivo JAR generado desde el directorio 'target/'
COPY target/microservice-product.jar app.jar

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
