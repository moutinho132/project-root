package com.store.microservice.infrastructure.adapters;

import com.store.microservice.domain.model.Product;
import com.store.microservice.domain.ports.ProductRepositoryPort;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class MongoProductRepository implements ProductRepositoryPort {

    private final SpringDataMongoRepository repository;

    public MongoProductRepository(SpringDataMongoRepository repository) {
        this.repository = repository;
    }

    @Override
    public Product save(Product product) {
        return repository.save(product);
    }

    @Override
    public Optional<Product> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public List<Product> findAll() {
        return repository.findAll();
    }

    @Override
    public void deleteById(String id) {
        repository.deleteById(id);
    }
}

interface SpringDataMongoRepository extends org.springframework.data.mongodb.repository.MongoRepository<Product, String> {
}