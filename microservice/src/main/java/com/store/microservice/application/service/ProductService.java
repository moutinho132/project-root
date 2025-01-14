package com.store.microservice.application.service;

import com.store.microservice.domain.model.Product;
import com.store.microservice.domain.ports.ProductRepositoryPort;
import com.store.microservice.domain.ports.ProductServicePort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements ProductServicePort {

    private ProductRepositoryPort productRepositoryPort;

    public ProductService(ProductRepositoryPort productRepositoryPort) {
        this.productRepositoryPort = productRepositoryPort;
    }

    @Override
    public Product createProduct(Product product) {
        return productRepositoryPort.save(product);
    }

    @Override
    public Product getProductById(String id) {
        return productRepositoryPort.findById(id).orElse(null);
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepositoryPort.findAll();
    }

    @Override
    public void deleteProduct(String id) {
        productRepositoryPort.deleteById(id);
    }
}