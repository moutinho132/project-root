import React, { useState } from 'react';
import api from './api';

const DeleteProduct = () => {
    const [productId, setProductId] = useState('');

    const handleInputChange = (e) => {
        setProductId(e.target.value);
    };

    const handleDeleteProduct = async () => {
        try {
            await api.delete(`/${productId}`);
            console.log('Producto eliminado');
        } catch (error) {
            console.error('Error eliminando el producto:', error);
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
            <button onClick={handleDeleteProduct}>Eliminar Producto</button>
        </div>
    );
};

export default DeleteProduct;
