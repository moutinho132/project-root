import React, { useState } from 'react';

const EditProduct = ({ product, onUpdate }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [status, setStatus] = useState(product.status);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {
            id: product.id,
            name,
            price,
            status
        };
        onUpdate(updatedProduct);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label htmlFor="editProductName">Nombre del Producto</label>
                <input
                    type="text"
                    className="form-control"
                    id="editProductName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del producto"
                />
            </div>
            <div className="form-group">
                <label htmlFor="editProductPrice">Precio</label>
                <input
                    type="number"
                    className="form-control"
                    id="editProductPrice"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Precio"
                />
            </div>
            <div className="form-group">
                <label htmlFor="editProductStatus">Estado</label>
                <select
                    className="form-control"
                    id="editProductStatus"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}>
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <button type="submit" className="btn btn-warning">Actualizar Producto</button>
        </form>
    );
};