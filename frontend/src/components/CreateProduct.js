import React, { useState } from 'react';

const CreateProduct = ({ onCreate }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = { name, price, status };
        onCreate(newProduct);

        setName('');
        setPrice('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre del producto"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="text"
                placeholder="Estado"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            />
            <button type="submit">Crear Producto</button>
        </form>
    );
};

export default CreateProduct;
