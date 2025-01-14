import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable'; 
import CreateProductModal from './CreateProductModal'; 
import api from '../services/api'; 

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
    const [selectedProduct, setSelectedProduct] = useState(null); // Producto seleccionado para actualizar

    // Función para cargar los productos desde el backend
    const fetchProducts = async () => {
        try {
            const response = await api.get('');
            setProducts(response.data);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateProduct = async (newProduct) => {
        try {
            const response = await api.post('', newProduct);  
            setProducts((prevProducts) => [...prevProducts, response.data]);
        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    };

    // Función para manejar la eliminación de un producto
    const handleDeleteProduct = async (productId) => {
        try {
            await api.delete(`/${productId}`);
            setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    // Función para manejar la actualización de un producto
    const handleUpdateProduct = async (updatedProduct) => {
        try {
            // Cambiar de PUT a POST y enviar el producto completo (incluyendo el id) en el payload
            const response = await api.post('', updatedProduct); // Enviamos el id en el body
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? response.data : product
                )
            );
            setShowModal(false); // Cerrar el modal tras la actualización
            setSelectedProduct(null); // Limpiar el producto seleccionado
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };    

    // Mostrar el modal de creación/actualización con datos del producto seleccionado (para actualizar)
    const handleOpenModal = (product = null) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Cerrar el modal
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedProduct(null); // Limpiar el producto seleccionado
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Gestión de Productos</h1>

            {/* Botón para abrir el modal para crear un nuevo producto */}
            <button className="btn btn-primary" onClick={() => handleOpenModal()}>
                Crear Producto
            </button>

            {/* Mostrar la tabla de productos cargados */}
            {isLoading ? (
                <p>Cargando productos...</p>
            ) : (
                <ProductTable
                    products={products}
                    onDelete={handleDeleteProduct}
                    onEdit={handleOpenModal} // Pasar la función de edición
                />
            )}

            {/* Modal para crear o actualizar producto */}
            <CreateProductModal
                show={showModal}
                onClose={handleCloseModal}
                onSave={selectedProduct ? handleUpdateProduct : handleCreateProduct} // Usar la función de crear o actualizar según el caso
                product={selectedProduct} // Pasar el producto si estamos actualizando
            />
        </div>
    );
};

export default ProductDashboard;
