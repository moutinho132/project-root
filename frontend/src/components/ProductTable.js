import React from 'react';

const ProductTable = ({ products, onDelete, onUpdate }) => {
    return (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.status}</td>
                        <td>
                            <button 
                                className="btn btn-warning mr-2" 
                                onClick={() => onUpdate(product)}>
                                Editar
                            </button>
                            <button 
                                className="btn btn-danger" 
                                onClick={() => onDelete(product.id)}>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};


export default ProductTable;
