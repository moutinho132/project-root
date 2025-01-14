package com.store.microservice.application.mapper;

import com.store.microservice.application.dto.ProductDTO;
import com.store.microservice.domain.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductDTO fromEntityToDto(Product product);

    @Mapping(target = "id", ignore = true)
    Product fomDtoToEntity(ProductDTO productDTO);
}