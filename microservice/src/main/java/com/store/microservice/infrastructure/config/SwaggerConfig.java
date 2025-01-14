package com.store.microservice.infrastructure.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Store Microservice API Products")
                        .version("1.0")
                        .summary("API REST para la gestión de productos")
                        .description("Documentación del CRUD de productos"));
    }
}
