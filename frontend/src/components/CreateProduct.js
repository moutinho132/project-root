import React, { useState } from 'react';
import ProductTable from './ProductTable';
import CreateProductModal from './CreateProductModal';

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products, setProducts] = useState([
        { id: 1, name: 'Producto 1', price: 100, status: 'activo' },
        { id: 2, name: 'Producto 2', price: 200, status: 'inactivo' },
    ]);

    const handleCreateOrUpdate = (product) => {
        if (selectedProduct) {
            console.log('Actualizando producto:', product);
        } else {
            console.log('Creando producto:', product);
        }
    };

    const handleOpenModal = (product = null) => {
        setSelectedProduct(product); // Establecer el producto seleccionado para editar
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="container mt-5">
            <ProductTable
                products={products}
                onDelete={handleDelete}
                onEdit={handleOpenModal}  
            />
            
            <CreateProductModal
                show={showModal}
                onClose={handleCloseModal}
                onSave={handleCreateOrUpdate}
                product={selectedProduct}
            />
        </div>
    );
};

export default App;
