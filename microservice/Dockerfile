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
