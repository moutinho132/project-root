import React, { useState } from 'react';
import api from './api';

const GetProduct = () => {
    const [productId, setProductId] = useState('');
    const [product, setProduct] = useState(null);

    const handleInputChange = (e) => {
        setProductId(e.target.value);
    };

    const handleFetchProduct = async () => {
        try {
            // Ahora la URL base ya está configurada en `api.js`, por lo que solo pasamos el endpoint relativo
            const response = await api.get(`/${productId}`);  // La URL base ya tiene la parte '/store/v1/api/products/'
            setProduct(response.data);
        } catch (error) {
            console.error('Error obteniendo el producto:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={productId}
                onChange={handleInputChange}
                placeholder="ID del producto"
            />
            <button onClick={handleFetchProduct}>Obtener Producto</button>

            {product && (
                <div>
                    <h3>{product.name}</h3>
                    <p>Precio: {product.price}</p>
                    <p>Estado: {product.status}</p>
                </div>
            )}
        </div>
    );
};

export default GetProduct;
