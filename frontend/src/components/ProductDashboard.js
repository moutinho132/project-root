import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable'; // Tabla para listar productos
import CreateProduct from './CreateProduct'; // Formulario para crear productos
import api from '../services/api'; // Axios configurado

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    const handleUpdateProduct = async (updatedProduct) => {
        try {
            const response = await api.put(`/${updatedProduct.id}`, updatedProduct);
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? response.data : product
                )
            );
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
        }
    };
    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Gestión de Productos</h1>
            {/* Componente para crear un nuevo producto */}
            <CreateProduct onCreate={handleCreateProduct} />

            

            {isLoading ? (
                <p>Cargando productos...</p>
            ) : (
                // Tabla con las acciones para los productos
                <ProductTable
                    products={products}
                    onDelete={handleDeleteProduct}
                />
            )}
        </div>
    );
};

export default ProductDashboard;
