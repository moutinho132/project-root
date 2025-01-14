package com.store.microservice.infrastructure.adapters;

import com.store.microservice.application.dto.ProductDTO;
import com.store.microservice.application.mapper.ProductMapper;
import com.store.microservice.domain.model.Product;
import com.store.microservice.domain.ports.ProductServicePort;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
@Tag(name = "Productos", description = "Operaciones relacionadas con productos")
public class ProductController {

    private  ProductServicePort productService;
    private  ProductMapper productMapper;

    public ProductController(ProductMapper productMapper, ProductServicePort productService) {
        this.productMapper = productMapper;
        this.productService = productService;
    }

    @PostMapping
    @Operation(summary = "Crear o actualizar un producto", description = "Crea un nuevo producto en la base de datos o actualiza uno existente")
    public ResponseEntity<ProductDTO> createProduct(@RequestBody ProductDTO productDTO) {
        Product product = productMapper.fomDtoToEntity(productDTO);
        return ResponseEntity.ok(productMapper.fromEntityToDto(productService.createProduct(product)));
    }


    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto por ID", description = "Obtiene los detalles de un producto usando su ID")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable String id) {
        return ResponseEntity.ok(productMapper.fromEntityToDto(productService.getProductById(id)));
    }

    @GetMapping
    @Operation(summary = "Listar productos", description = "Devuelve una lista de todos los productos")
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts()
                .stream()
                .map(productMapper::fromEntityToDto)
                .toList());
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar producto por ID", description = "Elimina un producto de la base de datos por su ID")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
}