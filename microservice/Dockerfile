# Dockerfile para el microservicio
FROM eclipse-temurin:17-jdk-alpine

# Crea el directorio de la aplicación
WORKDIR /app

# Copia el archivo JAR generado
COPY target/microservice-store.jar app.jar

# Expone el puerto de la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
