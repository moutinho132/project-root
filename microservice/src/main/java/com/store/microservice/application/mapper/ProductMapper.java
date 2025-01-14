package com.store.microservice.application.mapper;

import com.store.microservice.application.dto.ProductDTO;
import com.store.microservice.domain.model.Product;
import org.mapstruct.Mapper;


@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductDTO fromEntityToDto(Product product);

    Product fomDtoToEntity(ProductDTO productDTO);
}