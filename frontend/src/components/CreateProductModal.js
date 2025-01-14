import React, { useState, useEffect } from 'react';

const CreateProductModal = ({ show, onClose, onSave, product }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (product) {
            setName(product.name || '');
            setPrice(product.price || '');
            setStatus(product.status || 'activo');
        } else {
            setName('');
            setPrice('');
            setStatus('activo');
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProduct = { id: product?.id, name, price, status };
        onSave(updatedProduct);

        setName('');
        setPrice('');
        setStatus('');
        onClose();
    };

    if (!show) return null;

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {product ? 'Actualizar Producto' : 'Crear Producto'}
                        </h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="productName">Nombre del Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nombre del producto"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productPrice">Precio</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="productPrice"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Precio"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="productStatus">Estado</label>
                                <select
                                    className="form-control"
                                    id="productStatus"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}>
                                    <option value="activo">Activo</option>
                                    <option value="inactivo">Inactivo</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" disabled={!name || !price}>
                                {product ? 'Actualizar Producto' : 'Crear Producto'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProductModal;
