# Dockerfile para el API Gateway
FROM eclipse-temurin:17-jdk-focal

# Crea el directorio de la aplicación
WORKDIR /app

# Copia el archivo JAR generado
COPY target/api-gateway.jar app.jar

# Expone el puerto del API Gateway
EXPOSE 8081

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
