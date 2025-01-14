package com.store.microservice.domain.ports;

import com.store.microservice.domain.model.Product;

import java.util.List;

public interface ProductServicePort {
    Product createProduct(Product product);
    Product getProductById(String id);
    List<Product> getAllProducts();
    void deleteProduct(String id);
}
