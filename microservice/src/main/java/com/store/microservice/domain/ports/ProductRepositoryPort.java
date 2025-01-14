package com.store.microservice.domain.ports;

import com.store.microservice.domain.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductRepositoryPort {
    Product save(Product product);

    Optional<Product> findById(String id);

    List<Product> findAll();

    void deleteById(String id);

    boolean existsById(String id); // Agregar esta línea

    Product update(Product product);

}
