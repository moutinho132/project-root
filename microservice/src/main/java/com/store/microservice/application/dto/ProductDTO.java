package com.store.microservice.application.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;


@AllArgsConstructor
@Getter
@Builder
public class ProductDTO {
    private String id;
    private String name;
    private Double price;
    private String status;
}
